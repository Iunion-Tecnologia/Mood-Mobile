import React, { createContext, useCallback, useContext, useState } from 'react';

interface CommentContextData {
  postId: string;
  isOpen: boolean;
  openModal(postId: string): void;
  closeModal(): void;
}

const CommentContext = createContext<CommentContextData>(
  {} as CommentContextData,
);

export const CommentProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState('');

  const openModal = useCallback(
    postId => {
      setIsOpen(true);
      setPostId(postId);
    },
    [postId, isOpen],
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setPostId('');
  }, [postId, isOpen]);

  return (
    <CommentContext.Provider
      value={{
        openModal,
        closeModal,
        isOpen: isOpen,
        postId: postId,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export function useComment(): CommentContextData {
  const context = useContext(CommentContext);

  if (!context)
    throw new Error('useComment must be used within an CommentProvider');

  return context;
}
