import React from 'react'
import { Button, Paper } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import Dashboard from 'src/components/icons/menu/Dashboard'
import Profile from 'src/components/icons/menu/Profile'
import Wallet from 'src/components/icons/menu/Wallet'
import Grid from 'src/components/icons/menu/Grid'
import Home from 'src/components/icons/menu/Home'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  menu: {
    position: 'sticky',
    bottom: 0,
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    width: '100%',
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
    link: '/app/home',
    icon: <Home />
  },
  {
    title: 'services',
    link: '/app/services',
    icon: <Grid />
  },
  {
    title: 'documents',
    link: '/login',
    icon: <Wallet />
  },
  {
    title: 'dashboard',
    link: '/app/dashboard',
    icon: <Dashboard />
  },
  {
    title: 'profile',
    link: '/app/profile',
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
