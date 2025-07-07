"use client";

import { createContext, useContext, useState } from "react";

const NavigationContext = createContext<{
  loading: boolean;
  setLoading: (val: boolean) => void;
}>({ loading: false, setLoading: () => {} });

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  return (
    <NavigationContext.Provider value={{ loading, setLoading }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationLoading() {
  return useContext(NavigationContext);
}
