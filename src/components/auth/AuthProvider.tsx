"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { SUPABASE_CONFIGURED } from "@/lib/beta";
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
  active_path: "child",
  child_name: null,
  child_age_months: null,
  care_relationship: null,
  condition: null,
  onboarding_completed: true,
  preferences: {},
  created_at: new Date().toISOString(),
};

function normalizeActivePath(path: unknown): Profile["active_path"] {
  return path === "child" ? "child" : null;
}

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

export function AuthProvider({
  children,
  betaMode,
}: {
  children: React.ReactNode;
  betaMode: boolean;
}) {
  const [loading, setLoading] = useState(!betaMode && SUPABASE_CONFIGURED);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(
    betaMode ? BETA_PROFILE : null
  );

  const supabase = SUPABASE_CONFIGURED ? createClient() : null;

  const fetchProfile = useCallback(
    async (userId: string) => {
      if (!supabase) return;
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
      setProfile(
        data
          ? {
              ...data,
              active_path: normalizeActivePath(data.active_path),
            }
          : null
      );
    },
    [supabase]
  );

  const refreshProfile = useCallback(async () => {
    if (betaMode) {
      setProfile(BETA_PROFILE);
      return;
    }
    if (user?.id) await fetchProfile(user.id);
  }, [betaMode, user, fetchProfile]);

  const signOut = useCallback(async () => {
    if (supabase) await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    setProfile(betaMode ? BETA_PROFILE : null);
  }, [betaMode, supabase]);

  useEffect(() => {
    if (betaMode || !supabase) {
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
  }, [betaMode, supabase, fetchProfile]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        session,
        user,
        profile,
        isAuthenticated: betaMode || !!session,
        isBeta: betaMode,
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
