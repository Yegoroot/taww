/* eslint-disable react/prop-types */
import React, { ReactChild } from 'react'
import { makeStyles } from '@material-ui/core'
import { ThemeOptions } from '../theme/index'
import Menu from '../components/Menu'

const useStyles = makeStyles((theme: ThemeOptions) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: `url('/images/background/${theme.name}.png')`,
    // height: '100%',
    backgroundSize: '60%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% calc(100% - 70px)',
    backgroundAttachment: 'fixed'
  },
  wrapper: {
    paddingBottom: 50,
    overflow: 'auto'
  }
}))

const MainLayout = ({ children }:{children: ReactChild}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {children}
        <Menu />
      </div>
    </div>
  )
}

export default MainLayout
