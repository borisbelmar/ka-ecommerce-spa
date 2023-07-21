import { atom, useAtomValue } from 'jotai'
import { decodeJwt } from 'jose'
import { tokenAtom } from './token.atom'

interface Session {
  token: string
  user: {
    id: string
    role: string
  }
}

const sessionAtom = atom<Session | null>(get => {
  const token = get(tokenAtom)
  if (token) {
    const payload = decodeJwt(token)
    return {
      token,
      user: {
        id: payload.sub,
        role: payload.role
      } as Session['user']
    }
  }
  return null
})

export const useSession = () => useAtomValue(sessionAtom)