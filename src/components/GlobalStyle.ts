import { createStyles, makeStyles } from '@material-ui/core'
import { DIRECTION } from '../constants'

const useStyles = makeStyles((theme) => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      direction: DIRECTION === 'rtl' ? 'ltr' : DIRECTION,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      // [theme.breakpoints.up('md')]: {
      // },
      height: '100%',
      width: '100%',
    },
    body: {
      fontSize: '1rem',
      // fontFamily: '"Droid Arabic Naskh", "Roboto", sans-serif',
      fontFamily: 'Cairo, Roboto, sans-serif',
      height: '100%',
      width: '100%',
      lineHeight: 1.5,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      // disable select text
      '-webkit-user-select': 'none',
      '-webkit-touch-callout': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
    // menu
    a: {
      '&.active': {
        transform: 'scale(1.08)',
        transition: '0.2s',
        color: theme.palette.primary.main,
      },
    },
  },
}))

const GlobalStyles = () => {
  useStyles()
  return null
}

export default GlobalStyles
