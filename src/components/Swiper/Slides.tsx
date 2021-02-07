import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { UserType } from '../../constants'
import useSettings from '../../hooks/useSettings'
import Iqama from '../../assets/norm.png'
import PhotoDefault from '../../assets/photo.png'

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
    height: '13%',
    background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderRadius: '7px 0px 0px 7px'
  },
  user: {
    position: 'absolute',
    top: 0,
    right: '50%',
    transform: 'translate(50%, 10px)',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.primary.main,
    fontSize: 16
  },
  userPhoto: {
    width: '20%',
    borderRadius: '50%',
    border: 'solid 2px red',
    borderColor: theme.palette.primary.main
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: theme.spacing(1)
  },
  numberIqama: {
    fontSize: 17,
    fontWeight: 'bold'

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
  const { name, numberIqama, photo } = user
  const { settings } = useSettings()
  const src = photo || PhotoDefault

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
          src={src}
          alt=""
        />
        <span className={classes.name}>{name}</span>
        <span className={classes.numberIqama}>{numberIqama}</span>
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
