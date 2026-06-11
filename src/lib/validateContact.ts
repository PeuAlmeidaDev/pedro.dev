/**
 * Validação na borda do formulário de contato.
 * Função pura, sem dependência de framework — testável isoladamente e
 * reutilizável tanto no submit quanto (no futuro) em validação por campo.
 */

export interface ContactInput {
  name: string
  email: string
  message: string
}

/** Erro por campo; ausência de chave = campo válido. */
export type ContactErrors = Partial<Record<keyof ContactInput, string>>

/** Formato pragmático: algo@algo.tld. Não pretende cobrir a RFC inteira. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MIN_MESSAGE = 10

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {}

  if (!input.name.trim()) {
    errors.name = 'Informe seu nome.'
  }

  const email = input.email.trim()
  if (!email) {
    errors.email = 'Informe seu e-mail.'
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'E-mail inválido.'
  }

  if (input.message.trim().length < MIN_MESSAGE) {
    errors.message = `Mensagem muito curta (mín. ${MIN_MESSAGE} caracteres).`
  }

  return errors
}
