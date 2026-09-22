import { defineType, defineField, defineArrayMember } from 'sanity'

export const portableTable = defineType({
  name: 'portableTable',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'tableRow',
          title: 'Row',
          type: 'object',
          fields: [
            defineField({
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      rows: 'rows',
    },
    prepare({ rows }: { rows?: { cells: string[] }[] }) {
      const first = rows?.[0]?.cells?.[0]
      return {
        title: first ? `Table (${rows?.length ?? 0} rows)` : 'Empty table',
        subtitle: rows ? `${rows.length} rows` : undefined,
      }
    },
  },
})