/** Classificação de raridade de uma skill, derivada do seu nível (0–100). */
export interface Rarity {
  label: 'LENDÁRIO' | 'ÉPICO' | 'RARO' | 'COMUM'
  /** cor hex da raridade (não é token de tema — é específica da raridade) */
  color: string
}

/**
 * Mapeia o nível de uma skill para a sua raridade.
 * Faixas: ≥90 Lendário · ≥84 Épico · ≥76 Raro · senão Comum.
 */
export function rarityFor(level: number): Rarity {
  if (level >= 90) return { label: 'LENDÁRIO', color: '#fbbf24' }
  if (level >= 84) return { label: 'ÉPICO', color: '#c084fc' }
  if (level >= 76) return { label: 'RARO', color: '#22d3ee' }
  return { label: 'COMUM', color: '#9a93b8' }
}
