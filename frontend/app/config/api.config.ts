export const API_URL = `${process.env.APP_URL}/api`


export const getUsersUrl = (string: string) => `/users${string}`
export const getProjectsUrl = (string: string) => `/projects${string}`
export const getCategorysUrl = (string: string) => `/category${string}`

export const getAuthUrl = (string: string) => `/auth${string}`