import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-background-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
            Furniture That{" "}
            <span className="text-primary">Tells Your Story</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
            Discover our curated collection of premium furniture designed to transform
            your living spaces into expressions of your unique lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="primary">
              <span className="material-symbols-outlined">explore</span>
              Shop Collection
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
