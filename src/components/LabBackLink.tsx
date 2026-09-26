import Link from "next/link";

export default function LabBackLink({ showLabIndex = true }: { showLabIndex?: boolean }) {
  return (
    <nav aria-label="Back to portfolio" className="flex flex-wrap gap-2 mb-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-[12px] border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-4 py-2 text-[13px] font-medium text-[var(--color-text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-link)] transition-colors"
      >
        <span aria-hidden="true">←</span> Back to portfolio
      </Link>
      {showLabIndex && (
        <Link
          href="/lab"
          className="inline-flex items-center rounded-[12px] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2 text-[13px] font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-link)] transition-colors"
        >
          Lab index
        </Link>
      )}
    </nav>
  );
}
