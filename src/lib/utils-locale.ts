export type Locale = 'en' | 'es' | 'jp';

export function getLocaleText(field: any, locale: Locale = 'en'): string {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[locale] || field['en'] || '';
}

export function getLocaleContent(field: any, locale: Locale = 'en'): any {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[locale] || field['en'] || [];
}
