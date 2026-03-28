"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { BETA_MODE, SUPABASE_CONFIGURED } from "@/lib/beta";
import type { User, Session } from "@supabase/supabase-js";
import type { Profile } from "@/types";

interface AuthContextType {
  loading: boolean;
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  isAuthenticated: boolean;
  isBeta: boolean;
  refreshProfile: () => Promise<void>;
  signOut: () => Promise<void>;
}

const BETA_PROFILE: Profile = {
  id: "beta-user",
  display_name: "Beta Tester",
  avatar_url: null,
  active_path: null,
  child_name: null,
  child_age_months: null,
  care_relationship: null,
  condition: null,
  onboarding_completed: false,
  preferences: {},
  created_at: new Date().toISOString(),
};

const AuthContext = createContext<AuthContextType>({
  loading: true,
  session: null,
  user: null,
  profile: null,
  isAuthenticated: false,
  isBeta: false,
  refreshProfile: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(!BETA_MODE);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(
    BETA_MODE ? BETA_PROFILE : null
  );

  // In beta mode, read path from localStorage
  useEffect(() => {
    if (BETA_MODE && typeof window !== "undefined") {
      const savedPath = localStorage.getItem("homeslp-beta-path");
      if (savedPath) {
        setProfile((p) =>
          p
            ? {
                ...p,
                active_path: savedPath as "child" | "adult",
                onboarding_completed: true,
              }
            : p
        );
      }
    }
  }, []);

  const supabase = SUPABASE_CONFIGURED ? createClient() : null;

  const fetchProfile = useCallback(
    async (userId: string) => {
      if (!supabase) return;
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
      setProfile(data);
    },
    [supabase]
  );

  const refreshProfile = useCallback(async () => {
    if (BETA_MODE) {
      // Re-read from localStorage
      if (typeof window !== "undefined") {
        const savedPath = localStorage.getItem("homeslp-beta-path");
        setProfile((p) =>
          p
            ? {
                ...p,
                active_path: (savedPath as "child" | "adult") ?? p.active_path,
                onboarding_completed: !!savedPath || p.onboarding_completed,
              }
            : p
        );
      }
      return;
    }
    if (user?.id) await fetchProfile(user.id);
  }, [user?.id, fetchProfile]);

  const signOut = useCallback(async () => {
    if (supabase) await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    setProfile(BETA_MODE ? BETA_PROFILE : null);
  }, [supabase]);

  useEffect(() => {
    if (BETA_MODE || !supabase) {
      setLoading(false);
      return;
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event: string, session: Session | null) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchProfile(session.user.id);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase, fetchProfile]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        session,
        user,
        profile,
        isAuthenticated: BETA_MODE || !!session,
        isBeta: BETA_MODE,
        refreshProfile,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
