/* eslint-disable react/prop-types */
import React, { ReactChild } from 'react'
import { makeStyles } from '@material-ui/core'
import Menu from 'src/components/Menu'
import { ThemeOptions } from 'src/theme/index'
import { DOMAIN } from 'src/constants'

const useStyles = makeStyles((theme: ThemeOptions) => ({
  root: {
    backgroundImage: `url('${DOMAIN}images/background/${theme.name}.png')`,
    height: '100%',
    backgroundSize: '60%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% calc(100% - 70px)'
  },
  wrapper: {
    height: '100%',
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
