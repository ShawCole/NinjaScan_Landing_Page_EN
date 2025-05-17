import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();

    // Only run on client side
    useEffect(() => {
        setMounted(true);
        // Log initial state
        console.log("ThemeToggle mounted");
        console.log("Initial theme state:", {
            theme,
            resolvedTheme,
            mounted: true,
            systemTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        });
    }, []);

    // Log theme changes
    useEffect(() => {
        if (mounted) {
            console.log("Theme state updated:", {
                theme,
                resolvedTheme,
                systemTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            });
        }
    }, [theme, resolvedTheme, mounted]);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        const newTheme = theme === "dark" || (theme === "system" && resolvedTheme === "dark") ? "light" : "dark";
        console.log("Toggling theme:", {
            currentTheme: theme,
            currentResolvedTheme: resolvedTheme,
            newTheme
        });
        setTheme(newTheme);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            className="fixed bottom-4 right-4 z-50 rounded-full bg-white/10 backdrop-blur-sm dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
} 