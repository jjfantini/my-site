"use client";

import { Button } from "@/components/ui/button";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  className?: string;
}

export function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className={cn("size-12 text-zinc-800 dark:text-white hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/80 dark:hover:bg-white/10", className)}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <IconSun className="size-4 text-zinc-800 dark:hidden" />
      <IconMoon className="hidden size-4 text-white dark:block" />
    </Button>
  );
}
