import React from 'react'
import { makeStyles } from '@material-ui/core'
import { UserType } from 'src/constants'
import QRCode from 'qrcode.react'
import Update from 'src/components/icons/Update'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(1),
    background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  qrcode: {
    padding: 10,
    height: 'initial',
    width: '25%',
    '& path:nth-child(1)': {
      fill: 'none'
    },
    '& path:nth-child(2)': {
      fill: 'white'
    }
  },
  info: {
    fontSize: 11,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  updateButton: {
    marginTop: 10,
    marginRight: 10,
    width: 18,
  },

}))
export default function Status({ user }: {user: UserType}) {
  const classes = useStyles()
  const { userNumberIqama } = user

  return (
    <div className={classes.root}>
      <QRCode
        value={`${userNumberIqama}`}
        renderAs="svg"
        className={classes.qrcode}
      />
      <div className={classes.info}>
        <span className={classes.infoTitle}>No record of infection</span>
        <span>Last update: Tusday 26 January, 12:25 AM</span>
      </div>
      <Update className={classes.updateButton} />
    </div>
  )
}
