"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun
        className={
          "h-[1.2rem] w-[1.2rem] transition-all" +
          (isDark ? " rotate-0 scale-100" : " absolute rotate-90 scale-0")
        }
      />
      <Moon
        className={
          "h-[1.2rem] w-[1.2rem] transition-all" +
          (isDark ? " absolute rotate-90 scale-0" : " rotate-0 scale-100")
        }
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
