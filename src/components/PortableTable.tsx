interface PortableTableRow {
  _type: 'tableRow';
  _key?: string;
  cells: string[];
}

interface PortableTableProps {
  rows: PortableTableRow[];
}

export default function PortableTable({ rows }: PortableTableProps) {
  if (!rows?.length) return null;

  const [headerRow, ...bodyRows] = rows;

  return (
    <div className="overflow-x-auto rounded-[6px] border border-[var(--color-border-subtle)]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-[var(--color-border-subtle)]">
            {headerRow.cells?.map((cell, i) => (
              <th
                key={i}
                scope="col"
                className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--color-text-secondary)] whitespace-nowrap"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, ri) => (
            <tr
              key={row._key || `row-${ri}`}
              className={ri % 2 ? 'bg-[var(--color-bg-elevated)]/40' : ''}
            >
              {row.cells?.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 align-top text-sm leading-relaxed text-[var(--color-text-primary)]/80 border-t border-[var(--color-border-subtle)]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}