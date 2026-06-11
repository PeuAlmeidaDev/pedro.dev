import type { ContactInput } from './validateContact'

/**
 * Adaptador de envio do formulário via Web3Forms (https://web3forms.com).
 * Serviço estático — sem backend próprio. A `accessKey` é pública por design,
 * mas chega injetada pela borda (componente lê a env var), nunca hardcoded aqui.
 */

const ENDPOINT = 'https://api.web3forms.com/submit'

export interface SendResult {
  ok: boolean
  error?: string
}

export async function sendContact(input: ContactInput, accessKey: string): Promise<SendResult> {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ access_key: accessKey, ...input }),
    })

    const data = (await res.json()) as { success?: boolean; message?: string }

    if (data.success) {
      return { ok: true }
    }
    return { ok: false, error: data.message ?? 'Falha no envio.' }
  } catch {
    return { ok: false, error: 'Sem conexão. Tente novamente.' }
  }
}
