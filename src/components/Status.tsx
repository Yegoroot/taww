import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { UserType } from 'src/constants'
import QRCode from 'qrcode.react'
import Update from 'src/components/icons/Update'
import moment from 'moment'
import 'moment/locale/ar'
import useSettings from 'src/hooks/useSettings'
import LoadingScreen from 'src/components/LoadingScreen'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(1),
    background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    color: 'white'
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
  const { settings } = useSettings()
  moment.locale(settings.lang)

  const [date, setDate] = useState(moment.now())
  const [loading, setLoading] = useState(false)

  console.log(moment.now())

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
        value={`${userNumberIqama}`}
        renderAs="svg"
        className={clsx({ [classes.qrcode]: true, [classes.qrcodeHidden]: loading })}
      />
      {loading && <LoadingScreen className={classes.loading} />}
      <div className={classes.info}>
        <span className={classes.infoTitle}>No record of infection</span>
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
