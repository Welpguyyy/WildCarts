"use client";

import { createContext, useContext, useEffect, useState } from "react";
import supadata from "@/lib/supabaseclient";

type AuthContextType = {
  user: any;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Setting up auth listener...");
    // 1. Get current session on first load
    const getSession = async () => {
      const {
        data: { session },
      } = await supadata.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    // 2. Listen for login/logout/session changes
    const {
      data: { subscription },
    } = supadata.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth easily
export const useAuth = () => useContext(AuthContext);
