import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import useSettings from 'src/hooks/useSettings'
import Iqama from 'src/assets/norm.png'
import Photo from 'src/assets/photo.png'
import { UserType } from 'src/constants'

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    boxShadow: theme.shadows[1],
    borderRadius: 10
  },
  iqamaBlock: {
    position: 'relative'
  },
  iqamaImg: {
    position: 'absolute',
    width: '94%',
    top: '3%',
    right: '3%',
    boxShadow: theme.shadows[0]
  },
  photoBlock: {
    position: 'relative'
  },

  logo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: '23%',
  },
  rectangle: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    width: '23%',
    height: '10%',
    background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderRadius: '10px 0px 0px 10px'
  },
  user: {
    position: 'absolute',
    top: 0,
    right: '50%',
    transform: 'translate(50%, 10px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.primary.main,
    fontSize: 16
  },
  userPhoto: {
    width: 50,
    borderRadius: '50%',
    border: 'solid 2px red',
    borderColor: theme.palette.primary.main
  },
  userName: {
    fontSize: 20
  }
}))

export const SlideIqama = () => {
  const classes = useStyles()
  const { settings } = useSettings()

  return (
    <div className={classes.iqamaBlock}>
      <img
        className={clsx({
          [classes.image]: true,
          [classes.iqamaImg]: true
        })}
        src={Iqama}
        alt=""
      />
      <img
        className={classes.image}
        src={`/images/swiper/${settings.theme}.png`}
        alt=""
      />
    </div>
  )
}

export const SlideNumberIqama = ({ user }: {user: UserType}) => {
  const classes = useStyles()
  const { userName, userNumberIqama } = user
  const { settings } = useSettings()

  return (
    <div className={classes.photoBlock}>
      <img
        className={classes.image}
        src={`/images/swiper/${settings.theme}.png`}
        alt=""
      />
      <div className={classes.user}>
        <img
          className={classes.userPhoto}
          src={Photo}
          alt=""
        />
        <span className={classes.userName}>{userName}</span>
        <span>{userNumberIqama}</span>
      </div>
      <img
        className={classes.logo}
        src={`/images/logo${settings.theme}Theme.png`}
        alt=""
      />
      <span className={classes.rectangle} />

    </div>
  )
}
