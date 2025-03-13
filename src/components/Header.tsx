"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X } from "lucide-react"; // For mobile menu icons
import { Button } from "@/components/ui/button";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-background shadow-md">
            <div className="flex items-center justify-between p-4">
                <h1 className="text-xl font-bold">Chorulla Palli Pro</h1>

                <Button
                    variant="ghost"
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>

                <nav className="hidden lg:flex gap-6">
                    <Link href="/" className="text-foreground hover:text-primary">
                        Home
                    </Link>
                    <Link href="/submit" className="text-foreground hover:text-primary">
                        Submit a Mosque
                    </Link>
                    <Link href="/about" className="text-foreground hover:text-primary">
                        About
                    </Link>
                    <Link href="/contact" className="text-foreground hover:text-primary">
                        Contact
                    </Link>
                </nav>

                <ModeToggle />
            </div>

            {isOpen && (
                <nav className="flex flex-col items-center gap-4 pb-4 lg:hidden">
                    <Link href="/" className="text-foreground hover:text-primary">
                        Home
                    </Link>
                    <Link href="/about" className="text-foreground hover:text-primary">
                        About
                    </Link>
                    <Link href="/submit" className="text-foreground hover:text-primary">
                        Submit a Mosque
                    </Link>
                    <Link href="/contact" className="text-foreground hover:text-primary">
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
}
