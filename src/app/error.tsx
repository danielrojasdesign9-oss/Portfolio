"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-[var(--cds-background)] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <p className="text-[11px] font-bold tracking-[0.4em] text-[var(--cds-error)]">
          ERROR
        </p>
        <h1 className="font-display text-6xl md:text-7xl font-black tracking-tighter text-[var(--cds-text-primary)]">
          Something went wrong
        </h1>
        <p className="text-[var(--cds-text-secondary)] max-w-md mx-auto">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 bg-[var(--cds-background-brand)] text-[var(--cds-text-on-color)] px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
