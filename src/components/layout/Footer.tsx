import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Lifestyle Furnishers</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium furniture and home décor for modern living spaces.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">Quick Links</h4>
            <ul className="space-y-2">
              {["Products", "Collections", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">Contact</h4>
            <address className="not-italic text-white/60 text-sm space-y-2">
              <p>info@lifestyle-furnishers.com</p>
              <p>+1 (555) 000-0000</p>
            </address>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Lifestyle Furnishers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
