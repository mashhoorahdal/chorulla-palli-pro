"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

type Mosque = {
  name: string;
  location: string;
};

export default function MosqueList() {
  const [mosques, setMosques] = useState<Mosque[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMosques = async () => {
      const { data, error } = await supabase
        .from("mosques")
        .select("name, location");

      if (error) {
        toast("Failed to fetch mosques.", {
          description: "Please try again later.",
          action: {
            label: "Retry",
            onClick: fetchMosques,
          },
        });
        console.error("Failed to fetch mosques:", error.message);
      } else {
        if (data?.length === 0) {
          toast("No mosques found nearby.", {
            description: "Consider submitting a mosque location.",
          });
        } else {
          toast("Mosques loaded successfully!", {
            description: `Found ${data.length} mosque(s) nearby.`,
          });
        }
        setMosques(data || []);
      }

      setLoading(false);
    };

    fetchMosques();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading mosques...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Nearby Mosques
      </h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mosque Name</TableHead>
            <TableHead>Google Maps Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mosques.map((mosque) => (
            <TableRow key={mosque.name}>
              <TableCell>{mosque.name}</TableCell>
              <TableCell>
                <a
                  href={mosque.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View on Maps
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
