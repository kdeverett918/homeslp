"use client";

import { createContext, useContext, useCallback } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { SUPABASE_CONFIGURED } from "@/lib/beta";
import type { ContentPath } from "@/types";

interface PathContextType {
  activePath: ContentPath | null;
  setPath: (path: ContentPath) => Promise<void>;
  isChild: boolean;
}

const PathContext = createContext<PathContextType>({
  activePath: null,
  setPath: async () => {},
  isChild: false,
});

export function PathProvider({
  children,
  betaMode,
}: {
  children: React.ReactNode;
  betaMode: boolean;
}) {
  const { profile, refreshProfile } = useAuth();
  const supabase = SUPABASE_CONFIGURED ? createClient() : null;

  const setPath = useCallback(
    async (path: ContentPath) => {
      if (betaMode) {
        await refreshProfile();
        return;
      }
      if (!profile?.id || !supabase) return;
      await supabase
        .from("profiles")
        .update({ active_path: path, onboarding_completed: true })
        .eq("id", profile.id);
      await refreshProfile();
    },
    [betaMode, profile, supabase, refreshProfile]
  );

  const activePath = profile?.active_path === "child" ? "child" : null;

  return (
    <PathContext.Provider
      value={{
        activePath,
        setPath,
        isChild: activePath === "child",
      }}
    >
      {children}
    </PathContext.Provider>
  );
}

export function usePath() {
  return useContext(PathContext);
}
