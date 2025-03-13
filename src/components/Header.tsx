"use client";

import { ModeToggle } from "@/components/ModeToggle";

export function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-background shadow-md">
            <h1 className="text-xl font-bold">Chorulla Palli Pro</h1>
            <nav className="flex gap-6">
                <a href="/about" className="text-foreground hover:text-primary">About</a>
                <a href="/submit" className="text-foreground hover:text-primary">Submit a Mosque</a>
                <a href="/contact" className="text-foreground hover:text-primary">Contact</a>
            </nav>
            <ModeToggle />
        </header>

    );
}
