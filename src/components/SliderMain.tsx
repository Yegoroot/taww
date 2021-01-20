import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'
import { makeStyles } from '@material-ui/core'
import 'swiper/swiper.min.css'
import Dark from 'src/assets/dark.png'
import Light from 'src/assets/light.png'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    height: '100%'
  },
  image: {
    width: '100%',
  },
  swiper: {
    // height: '25%',
    margin: '20px -200px !important',
    '& .swiper-slide:not(.swiper-slide-next)': {
      transform: 'scale(0.8) !important',
      zIndex: '-1 !important'
    },
    '& .swiper-slide .swiper-slide-shadow-left': {
      backgroundImage: 'none !important',
      opacity: 0.9
    },
    '& .swiper-slide .swiper-slide-shadow-right': {
      backgroundImage: 'none !important',
      opacity: 0.9
    },
    '& .swiper-slide-next': {
      // if маленький залазиет на большой
      // transformStyle: 'initial !important',
      // transitionProperty: 'initial !important'

      // end
      // transform: 'scale(1.6) !important',
      // width: '150%',
      // zIndex: '1 !important'
    }
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center'
  },
  circle: {
    background: theme.palette.text.primary,
    borderRadius: '50%',
    width: theme.spacing(1),
    height: theme.spacing(1),
  },
  wrapper: {
    width: theme.spacing(3),
    justifyContent: 'space-between',
    display: 'flex',
    position: 'relative'
  },
  marker: {
    background: theme.palette.primary.main,
    borderRadius: '50%',
    width: theme.spacing(1) + 2,
    height: theme.spacing(1) + 2,
    position: 'absolute',
    marginTop: -1,
    marginLeft: -1
  },
  markerNext: {
    transform: 'translateX(16px)'
  }

}))
SwiperCore.use([EffectCoverflow, Pagination])

export default () => {
  const classes = useStyles()
  const [mar, setMarker] = useState(false)

  return (
    <div
      className={classes.root}

    >

      <Swiper
        className={classes.swiper}
        spaceBetween={-30}
        effect="coverflow"
        loop
        slidesPerView={3}
        onSlideChange={() => setMarker((state) => !state)}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className={classes.image}
            src={Dark}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src={Light}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src={Dark}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src={Light}
            alt=""
          />
        </SwiperSlide>

      </Swiper>
      <div className={classes.pagination}>
        <div className={classes.wrapper}>

          <span className={classes.circle} />
          <span className={classes.circle} />
          <span className={clsx({
            [classes.marker]: true,
            [classes.markerNext]: mar
          })}
          />
        </div>
      </div>
    </div>
  )
}
