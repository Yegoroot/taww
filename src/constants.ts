// export const ENABLE_REDUX_DEV_TOOLS = true
export const DEBUG_I18 = true
export const DEFAULT_LANGUAGE = 'ar'
export const DIRECTION = 'rtl' // так же поменяй в index.html
export const DOMAIN = 'http://localhost:3000/'

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
}

export type UserType = {
  name: String,
  numberIqama: number,
  photo: string,
  photoIqama: string,
}

const {
  numberIqama, name, photo, photoIqama
} = JSON.parse(localStorage.getItem('user') || '{}')
export const user = {
  numberIqama,
  name,
  photo,
  photoIqama
}
