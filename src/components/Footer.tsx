"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-6">
      <div className="container mx-auto flex flex-col items-center gap-4 text-sm text-muted-foreground">
        {/* Links */}
        <nav className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </nav>

        {/* Copyright */}
        <p>© {new Date().getFullYear()} Chorulla Palli Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}
