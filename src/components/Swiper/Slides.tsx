import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { UserType } from '../../constants'
import useSettings from '../../hooks/useSettings'
import Iqama from '../../assets/images/norm.png'

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    // boxShadow: theme.shadows[1],
    borderRadius: 10
  },
  photoBlock: {
    position: 'relative'
  },
  logo: {
    position: 'absolute',
    bottom: 14,
    left: 10,
    width: '23%',
  },
  rectangle: {
    position: 'absolute',
    bottom: 14,
    right: 0,
    width: '23%',
    height: '13%',
    background: `linear-gradient(270deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.dark})`,
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

    borderRadius: '50%',
    border: 'solid 2px red',
    borderColor: theme.palette.primary.main,
    width: 60,
    height: 60,
    padding: 2
    // padding: theme.spacing(0.5)

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

export const SlideIqama = ({ user }: {user: UserType}) => {
  const classes = useStyles()
  const { photoIqama, } = user
  const src = photoIqama || Iqama
  return (
    <img
      className={clsx({
        [classes.image]: true
      })}
      src={src}
      alt=""
    />
  )
}

export const SlidePhoto = ({ user }: {user: UserType}) => {
  const classes = useStyles()
  const { name, numberIqama, photo } = user
  const { settings } = useSettings()
  const src = photo || '/images/user.png'

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
        src="/images/slide.png"
        alt=""
      />
      <span className={classes.rectangle} />

    </div>
  )
}
