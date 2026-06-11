import { describe, it, expect } from 'vitest'
import { validateContact } from './validateContact'

describe('validateContact', () => {
  const valid = {
    name: 'Pedro',
    email: 'pedro@example.com',
    message: 'Olá, vamos formar uma party?',
  }

  it('não retorna erros para um payload válido', () => {
    expect(validateContact(valid)).toEqual({})
  })

  it('exige nome não-vazio (ignorando espaços)', () => {
    expect(validateContact({ ...valid, name: '   ' }).name).toBeDefined()
  })

  it('rejeita e-mail sem formato válido', () => {
    expect(validateContact({ ...valid, email: 'pedro.example.com' }).email).toBeDefined()
  })

  it('exige e-mail não-vazio', () => {
    expect(validateContact({ ...valid, email: '' }).email).toBeDefined()
  })

  it('rejeita mensagem curta demais', () => {
    expect(validateContact({ ...valid, message: 'oi' }).message).toBeDefined()
  })

  it('reporta múltiplos erros de uma vez', () => {
    const errors = validateContact({ name: '', email: 'x', message: '' })
    expect(Object.keys(errors)).toEqual(
      expect.arrayContaining(['name', 'email', 'message']),
    )
  })
})
