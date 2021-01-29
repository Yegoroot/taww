import React from 'react'
import { makeStyles } from '@material-ui/core'
import { GetApp } from '@material-ui/icons'
// import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(4),
    background: '#e91e63',
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    color: 'white',
    padding: 10,
    alignItems: 'center',

  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
  },
  infoTitle: {
    fontSize: 14,
    margin: '0 10px'
  },
  downloadButton: {
    fontSize: 30
  },
  img: {
    width: 40,
    'border-radius': theme.spacing(1)
  }

}))
export default function Tabaud() {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      {/* <div className={classes.info}> */}
      <img
        className={classes.img}
        src="/images/tabaud.png"
        alt=""
      />
      <span className={classes.infoTitle}>
        Download Tabaud to protect yourself and your loves ones
      </span>
      {/* </div> */}
      <GetApp className={classes.downloadButton} />
    </div>
  )
}
