import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import QRCode from 'qrcode.react'
import moment from 'moment'
import clsx from 'clsx'
import { UserType } from '../constants'
import Update from './icons/Update'
import 'moment/locale/ar'
import useSettings from '../hooks/useSettings'
import LoadingScreen from './LoadingScreen'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(1),
    background: `linear-gradient(0deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.dark})`,
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    color: 'white',
    alignItems: 'stretch'
  },
  wrapperQrcode: {
    position: 'relative'
  },
  loading: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(50%, -50%)'
  },
  qrcode: {
    padding: 10,
    height: 'initial',
    width: '25%',
    minWidth: 80,
    '& path:nth-child(1)': {
      fill: 'none'
    },
    '& path:nth-child(2)': {
      fill: 'white'
    }
  },
  qrcodeHidden: {
    visibility: 'hidden'
  },
  info: {
    // fontSize: 11,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // flex: 1

    fontSize: 11,
    flex: 1,
    display: 'grid',
    padding: '7px 10px 7px 0px',
    alignItems: 'stretch',
  },
  infoTitle: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  updateButton: {
    marginTop: 10,
    marginRight: 10,
    alignSelf: 'center',
    width: 18,
  },

}))
export default function Status({ user }: {user: UserType}) {
  const classes = useStyles()
  const { numberIqama } = user
  const { settings } = useSettings()
  moment.locale(settings.lang)

  const [date, setDate] = useState(moment.now())
  const [loading, setLoading] = useState(false)

  const onUpdate = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDate(moment.now())
    }, 1000)
  }
  return (
    <div className={classes.root}>
      <QRCode
        value={`${numberIqama}`}
        renderAs="svg"
        className={clsx({ [classes.qrcode]: true, [classes.qrcodeHidden]: loading })}
      />
      {loading && <LoadingScreen className={classes.loading} />}
      <div className={classes.info}>
        <span className={classes.infoTitle}>Immunazed by recovery</span>
        <span>
          Last update:
          {' '}
          {moment(date).format('dddd DD MMMM, LT')}
        </span>
      </div>
      <Update
        className={classes.updateButton}
        onClick={onUpdate}
      />
    </div>
  )
}
