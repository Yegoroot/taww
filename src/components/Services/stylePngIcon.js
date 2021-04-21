import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {},
  wrapSlide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 13,
    color: theme.palette.text.primary,
    padding: 10,
  },
  slideTitle: {
    color: theme.palette.text.primary,
  },
  img: {
    width: 40,
    marginBottom: 8
  }
}))

export default useStyles
