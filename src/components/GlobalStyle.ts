import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      // [theme.breakpoints.up('md')]: {
      height: '100%',
      // },
      width: '100%'
    },
    body: {
      fontSize: '1rem',
      fontFamily: '"Roboto", "DINNextLTArabic-Regular", sans-serif',
      height: '100%',
      width: '100%',
      lineHeight: 1.5,
    },
    '#root': {
      height: '100%',
      width: '100%'
    },
    // menu
    a: {
      '&.active': {
        transform: 'scale(1.08)',
        transition: '0.2s',
        color: theme.palette.primary.main,
      },
    },
  }

}))

const GlobalStyles = () => {
  useStyles()

  return null
}

export default GlobalStyles
