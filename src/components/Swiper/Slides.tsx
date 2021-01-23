import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import useSettings from 'src/hooks/useSettings'
import Iqama from 'src/assets/norm.png'

const useStyles = makeStyles((/* theme: ThemeOptions */) => ({
  image: {
    width: '100%',
  },
  iqamaBlock: {
    position: 'relative'
  },
  iqamaImg: {
    position: 'absolute',
    width: '94%',
    top: '3%',
    right: '3%',
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

export const SlideNumberIqama = () => {
  console.log('s')
  return <div />
}
