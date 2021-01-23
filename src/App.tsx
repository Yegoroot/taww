import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes, { renderRoutes } from 'src/routes'
import useSettings from 'src/hooks/useSettings'
import { createTheme } from 'src/theme'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { I18nextProvider } from 'react-i18next'
import i18n from 'src/translate/i18n'
import GlobalStyles from 'src/components/GlobalStyle'
import {
  jssPreset,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core'

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
