'use client';

import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const theme = savedTheme || (systemDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, []);

    if (!mounted) return null;

    return <>{children}</>;
}