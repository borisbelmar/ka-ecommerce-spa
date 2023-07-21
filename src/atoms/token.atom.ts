import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'

export const tokenAtom = atom(localStorage.getItem('token'), (_get, set, token: string) => {
  if (token === '') {
    localStorage.removeItem('token')
  } else {
    localStorage.setItem('token', token)
  }
  set(tokenAtom, token)
  return token
})

export const useTokenValue = () => useAtomValue(tokenAtom)
export const useSetToken = () => useSetAtom(tokenAtom)
export const useToken = () => useAtom(tokenAtom)