"use client"
export const CreateAccountSession = (token: string) => {
  localStorage.setItem("access-token", token)
}

export const GetAccountSession = () => {
  return localStorage.getItem("access-token")
}

export const ClearAccountSession = () => {
  localStorage.removeItem("access-token")
}