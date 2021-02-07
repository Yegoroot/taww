// export const ENABLE_REDUX_DEV_TOOLS = true
export const DEBUG_I18 = true
export const DEFAULT_LANGUAGE = 'en'
export const DOMAIN = 'http://localhost:3000/'

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
}

export type UserType = {
  name: String,
  numberIqama: number,
  photo: string
}

const { numberIqama, name, photo } = JSON.parse(localStorage.getItem('user') || '{}')
export const user = {
  numberIqama,
  name,
  photo
}
