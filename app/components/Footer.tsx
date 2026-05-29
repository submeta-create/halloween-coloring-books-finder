import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f5efe6] px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
        <nav
          aria-label="Legal links"
          className="flex flex-wrap gap-x-5 gap-y-2 font-medium"
        >
          <Link href="/about" className="hover:text-black">
            About
          </Link>
          <Link href="/imprint" className="hover:text-black">
            Imprint
          </Link>
          <Link href="/privacy" className="hover:text-black">
            Privacy Policy
          </Link>
          <Link href="/affiliate-disclosure" className="hover:text-black">
            Affiliate Disclosure
          </Link>
        </nav>

        <a
          href="mailto:contact@cozyhalloweenbooks.com"
          className="font-medium hover:text-black"
        >
          contact [at] cozyhalloweenbooks.com
        </a>
      </div>
    </footer>
  );
}
