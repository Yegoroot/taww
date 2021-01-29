import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { I18nextProvider } from 'react-i18next'
import {
  jssPreset,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core'
import routes, { renderRoutes } from './routes'
import useSettings from './hooks/useSettings'
import { createTheme } from './theme/index'
import i18n from './translate/i18n'
import GlobalStyles from './components/GlobalStyle'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

const App = () => {
  const { settings } = useSettings()
  const theme = createTheme({ theme: settings.theme })

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <React.StrictMode>
            <GlobalStyles />
            <BrowserRouter>
              {/* <AuthProvider> */}
              {/* <UpdateApp /> */}
              {/* <Alerts /> */}
              {renderRoutes(routes)}
              {/* </AuthProvider> */}
            </BrowserRouter>
          </React.StrictMode>
        </StylesProvider>
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default App
