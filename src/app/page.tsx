"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
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
  const toastShownRef = useRef(false); // Prevent duplicate toast

  const fetchMosques = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.from("mosques").select("name, location");

    if (error) {
      toast("Failed to fetch mosques.", {
        description: "Please try again later.",
        action: {
          label: "Retry",
          onClick: fetchMosques,
        },
      });
    } else {
      setMosques(data || []);
      
      // Show success toast only once
      if (!toastShownRef.current) {
        toast("Mosques loaded successfully!", {
          description: `Found ${data.length} mosque(s) nearby.`,
        });
        toastShownRef.current = true; // Mark as shown
      }
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMosques();
  }, [fetchMosques]);

  const mosqueRows = useMemo(
    () =>
      mosques.map((mosque) => (
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
      )),
    [mosques]
  );

  if (loading) {
    return <p className="text-center mt-10">Loading mosques...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Nearby Mosques</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mosque Name</TableHead>
            <TableHead>Google Maps Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{mosqueRows}</TableBody>
      </Table>
    </div>
  );
}
