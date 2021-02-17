import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(4),
    background: '#cc3737',
    borderRadius: theme.spacing(1),
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'space-between',
    position: 'relative',
    color: 'white',
    padding: 10,
    alignItems: 'center',
    '& h5': {
      'text-decoration': 'underline',
      marginBottom: theme.spacing(1),
    }

  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
  },
  infoTitle: {
    fontSize: 12,
    margin: '0 10px',
    textAlign: 'center'
  },
  downloadButton: {
    fontSize: 30
  },
  img: {
    width: 60,
    'margin-top': theme.spacing(1.5),
    filter: 'brightness(5)',
    'border-radius': theme.spacing(1)
  }

}))
export default function Tabaud() {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <h5>Warning</h5>
      <span className={classes.infoTitle}>
        {
          `
          We strongly encourage to download "Tabaud" App
          that alerts when contact with someone infected by Covid 19 and safe privacy.
          Protect your community by downloading the App`
        }

      </span>

      <img
        className={classes.img}
        src="/images/tabaud.png"
        alt=""
      />

    </div>
  )
}
