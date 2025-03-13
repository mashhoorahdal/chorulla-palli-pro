"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

export default function ContactPage() {
    const GITHUB_LINK = "https://github.com/mashhoor-ahdal/chorulla-palli-pro";
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground">
            <Card className="max-w-md w-full shadow-lg rounded-2xl border border-border">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">
                        Contact Us
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <p className="text-center text-muted-foreground">
                        For inquiries, feedback, or contributions, visit our GitHub repository.
                    </p>
                    <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                        <Link
                            href={GITHUB_LINK}
                            target="_blank"
                        >
                            <GithubIcon className="mr-2" size={18} />
                            Visit GitHub
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </main>
    );
}
