"use client"
import Cookies from 'js-cookie'

export const CreateAccountSession = (token: string) => {
  Cookies.set('access-token', token, { path: '' })
}

export const GetAccountSession = () => {
  return Cookies.get('access-token')
}

export const ClearAccountSession = () => {
  Cookies.remove('access-token')
}
