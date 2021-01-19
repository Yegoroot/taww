/* eslint-disable react/prop-types */
import React, { ReactChild } from 'react'
import { makeStyles } from '@material-ui/core'
import { ThemeOptions } from 'src/theme/index'
import { DOMAIN } from 'src/constants'

const useStyles = makeStyles((theme: ThemeOptions) => ({
  root: {
    backgroundImage: `url('${DOMAIN}images/background/${theme.name}.png')`,
    height: '100%',
    backgroundSize: '60%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 90%',
    padding: 20
  }
}))

const DashboardLayout = ({ children }:{children: ReactChild}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default DashboardLayout