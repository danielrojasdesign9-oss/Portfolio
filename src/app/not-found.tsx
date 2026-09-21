import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--cds-background)] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <p className="text-[11px] font-bold tracking-[0.4em] text-[var(--cds-text-helper)]">
          404
        </p>
        <h1 className="font-display text-6xl md:text-7xl font-black tracking-tighter text-[var(--cds-text-primary)]">
          Page not found
        </h1>
        <p className="text-[var(--cds-text-secondary)] max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--cds-link-primary)] hover:underline font-medium"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
