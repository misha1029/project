export const getAdminUrl = (url: string) => `/project/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)