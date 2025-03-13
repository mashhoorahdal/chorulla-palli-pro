export default function AboutPage() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
        <h1 className="text-5xl font-bold text-primary mb-6">
          About Chorulla Palli Pro
        </h1>
  
        <p className="text-center max-w-md text-muted-foreground mb-4 leading-relaxed">
          Chorulla Palli Pro is a platform designed to help people find nearby mosques serving food during Ramadan. 
          Our mission is to connect the community by providing easy access to important information about local mosques.
        </p>
  
        <p className="text-center max-w-md text-accent-foreground leading-relaxed">
          Whether you&rsquo;re looking for a mosque to break your fast or want to submit a new location, 
          Chorulla Palli Pro makes it easy and efficient.
        </p>
      </main>
    );
  }
  