"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";

const formSchema = z.object({
    mosqueName: z.string().min(2, "Mosque name must be at least 2 characters."),
    locationLink: z
        .string()
        .url("Please enter a valid Google Maps link.")
        .nonempty("Location link is required."),
});

export default function SubmitMosqueForm() {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mosqueName: "",
            locationLink: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            const { error } = await supabase.from("mosques").insert({
                name: values.mosqueName,
                location: values.locationLink,
            });

            if (error) {
                toast("Failed to submit mosque. Please try again.");
            } else {
                toast("Mosque submitted successfully!");
                form.reset();
            }
        } catch (error) {
            toast("An unexpected error occurred. Please try again.");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="max-w-md w-full shadow-lg rounded-2xl border border-border">
            <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                    Submit a Mosque
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                        {/* Mosque Name Field */}
                        <FormField
                            control={form.control}
                            name="mosqueName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mosque Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Eg: Al-Falah Mosque" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Google Maps Link Field */}
                        <FormField
                            control={form.control}
                            name="locationLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Google Maps Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Paste Google Maps link"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? "Submitting..." : "Submit Mosque"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
