import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Lifestyle Furnishers – your destination for premium furniture and home décor.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background-light">
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-5xl font-bold font-display text-background-dark mb-4">
          Lifestyle Furnishers
        </h1>
        <p className="text-xl text-background-dark/70 max-w-2xl mb-8">
          Discover premium furniture and home décor that transforms your living spaces.
        </p>
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-3xl">chair</span>
          <span className="text-lg font-medium">Explore our collection</span>
          <span className="material-symbols-outlined text-3xl">arrow_forward</span>
        </div>
      </section>
    </main>
  );
}
