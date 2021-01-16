import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import {
  jssPreset,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core'

import rtl from 'jss-rtl'
import { create } from 'jss'
import { createTheme } from 'src/theme'
import reportWebVitals from './reportWebVitals'
import App from './App'
import { THEMES } from './constants'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })
const theme = createTheme({
  direction: 'ltr',
  theme: THEMES.LIGHT
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StylesProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
