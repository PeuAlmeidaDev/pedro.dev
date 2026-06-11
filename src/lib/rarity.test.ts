import { describe, it, expect } from 'vitest'
import { rarityFor } from './rarity'

describe('rarityFor', () => {
  it('classifica como LENDÁRIO a partir de 90', () => {
    expect(rarityFor(90).label).toBe('LENDÁRIO')
    expect(rarityFor(100).label).toBe('LENDÁRIO')
  })

  it('classifica como ÉPICO de 84 a 89', () => {
    expect(rarityFor(84).label).toBe('ÉPICO')
    expect(rarityFor(89).label).toBe('ÉPICO')
  })

  it('classifica como RARO de 76 a 83', () => {
    expect(rarityFor(76).label).toBe('RARO')
    expect(rarityFor(83).label).toBe('RARO')
  })

  it('classifica como COMUM abaixo de 76', () => {
    expect(rarityFor(75).label).toBe('COMUM')
    expect(rarityFor(0).label).toBe('COMUM')
  })

  it('retorna uma cor hex para cada faixa', () => {
    for (const level of [95, 86, 78, 50]) {
      expect(rarityFor(level).color).toMatch(/^#[0-9a-fA-F]{6}$/)
    }
  })
})
