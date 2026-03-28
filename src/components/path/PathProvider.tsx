"use client";

import { createContext, useContext, useCallback } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import type { ContentPath } from "@/types";

interface PathContextType {
  activePath: ContentPath | null;
  setPath: (path: ContentPath) => Promise<void>;
  isChild: boolean;
  isAdult: boolean;
}

const PathContext = createContext<PathContextType>({
  activePath: null,
  setPath: async () => {},
  isChild: false,
  isAdult: false,
});

export function PathProvider({ children }: { children: React.ReactNode }) {
  const { profile, refreshProfile } = useAuth();
  const supabase = createClient();

  const setPath = useCallback(
    async (path: ContentPath) => {
      if (!profile?.id) return;
      await supabase
        .from("profiles")
        .update({ active_path: path, onboarding_completed: true })
        .eq("id", profile.id);
      await refreshProfile();
    },
    [profile?.id, supabase, refreshProfile]
  );

  const activePath = profile?.active_path ?? null;

  return (
    <PathContext.Provider
      value={{
        activePath,
        setPath,
        isChild: activePath === "child",
        isAdult: activePath === "adult",
      }}
    >
      {children}
    </PathContext.Provider>
  );
}

export function usePath() {
  const context = useContext(PathContext);
  if (!context) throw new Error("usePath must be used within PathProvider");
  return context;
}
