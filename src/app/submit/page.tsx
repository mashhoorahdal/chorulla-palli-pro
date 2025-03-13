import SubmitMosqueForm from "@/components/forms/MosqueSearchForm";

export default function SubmitMosquePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
            <h1 className="text-4xl font-bold mb-4 text-center">Submit a Mosque</h1>
            <p className="text-center max-w-md mb-6 text-muted-foreground">
                Help others find nearby mosques by submitting a location.
            </p>
            <SubmitMosqueForm />
        </main>
    );
}
