import React from 'react'
import { Button, Paper } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import Dashboard from 'src/components/icons/Dashboard'
import Profile from 'src/components/icons/Profile'
import Wallet from 'src/components/icons/Wallet'
import Grid from 'src/components/icons/Grid'
import Home from 'src/components/icons/Home'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  menu: {
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    padding: '0 5px',
    overflow: 'hidden'
  },
  iconWrap: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    paddingTop: 4
  },
  svg: {
    textAlign: 'center',
  },
  button: {
    fontWeight: 400,
    color: theme.palette.text.secondary
  },
  title: {
    fontSize: 11,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    overflow: 'hidden',
    textTransform: 'capitalize',
    textOverflow: 'ellipsis',
  }
}))

const buttons = [
  {
    title: 'home',
    link: '/home',
    icon: <Home />
  },
  {
    title: 'services',
    link: '/services',
    icon: <Grid />
  },
  {
    title: 'documents',
    link: '/documents',
    icon: <Wallet />
  },
  {
    title: 'dashboard',
    link: '/dashboard',
    icon: <Dashboard />
  },
  {
    title: 'profile',
    link: '/profile',
    icon: <Profile />
  },
]

export default function Menu() {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <Paper
      square
      className={classes.menu}
    >
      {
      buttons.map((button) => (
        <Button
          activeClassName="active"
          component={NavLink}
          to={button.link}
          key={button.title}
          size="small"
          className={classes.button}
        >
          <span className={classes.iconWrap}>
            <span className={classes.svg}>
              {button.icon}
            </span>
            <span className={classes.title}>
              {t(`menu.${button.title}`)}
            </span>
          </span>
        </Button>
      ))
    }

    </Paper>
  )
}
