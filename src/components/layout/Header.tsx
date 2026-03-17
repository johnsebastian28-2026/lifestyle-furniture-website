import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background-dark text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display font-bold text-xl text-white hover:text-primary transition-colors">
            Lifestyle Furnishers
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">
              Products
            </Link>
            <Link href="/collections" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">
              Collections
            </Link>
            <Link href="/about" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-primary transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="text-white/80 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button aria-label="Shopping cart" className="text-white/80 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
