import React, {
  createContext,
  useEffect,
  useState,
  ReactChild
} from 'react'
import _ from 'lodash'
import { THEMES, DEFAULT_LANGUAGE, DIRECTION } from '../constants'

type Setting = {
  theme: string;
  lang: string;
  direction: string;
}

const defaultSettings: Setting = {
  theme: THEMES.LIGHT,
  direction: DIRECTION,
  lang: DEFAULT_LANGUAGE
}

export const restoreSettings = () => {
  let settings = null

  try {
    const storedData = window.localStorage.getItem('taww_settings')

    if (storedData) {
      settings = JSON.parse(storedData)
    }
  } catch (err) {
    console.error(err)
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings
}

export const storeSettings = (settings: Setting) => {
  window.localStorage.setItem('taww_settings', JSON.stringify(settings))
}

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: () => { }
})

export const SettingsProvider = (
  { settings, children }: {settings?: Setting, children: ReactChild }
) => {
  const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings)

  const handleSaveSettings = (update = {}) => {
    const mergedSettings = _.merge({}, currentSettings, update)

    setCurrentSettings(mergedSettings)
    storeSettings(mergedSettings)
  }

  useEffect(() => {
    const restoredSettings = restoreSettings()

    if (restoredSettings) {
      setCurrentSettings(restoredSettings)
    }
  }, [])

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const SettingsConsumer = SettingsContext.Consumer

export default SettingsContext
