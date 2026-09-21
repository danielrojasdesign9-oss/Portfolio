export const systems = {
  cream: { label: 'Cream (actual)', vars: {} },
  monopo: { label: 'Monopo Dark', vars: { '--color-midnight-canvas': '#000', '--color-frost-white': '#fff' } },
  editorial: { label: 'Bold Editorial (Brenda)', vars: { '--color-midnight-canvas': '#F9F7F4', '--radius-cards': '16px' } },
} as const
export type SystemKey = keyof typeof systems
