import React, { createContext, useCallback, useContext, useState } from 'react';

interface ReloadContextData {
  menu: boolean;
  menuReload(): void;
  menuNotReload(): void;
}

const ReloadContext = createContext<ReloadContextData>({} as ReloadContextData);

export const ReloadProvider: React.FC = ({ children }) => {
  const [shuldReload, setShuldReload] = useState(false);

  const menuReload = useCallback(() => {
    setShuldReload(true);
  }, [shuldReload]);

  const menuNotReload = useCallback(() => {
    setShuldReload(false);
  }, [shuldReload]);

  return (
    <ReloadContext.Provider
      value={{
        menu: shuldReload,
        menuNotReload,
        menuReload,
      }}
    >
      {children}
    </ReloadContext.Provider>
  );
};

export function useReload(): ReloadContextData {
  const context = useContext(ReloadContext);

  if (!context)
    throw new Error('useComment must be used within an ReloadProvider');

  return context;
}
