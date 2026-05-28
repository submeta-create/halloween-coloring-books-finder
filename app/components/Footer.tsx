import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f5efe6] px-6 py-8">
      <nav
        aria-label="Legal links"
        className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-zinc-700"
      >
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
    </footer>
  );
}
