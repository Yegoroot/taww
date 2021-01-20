import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow } from 'swiper'
import { makeStyles } from '@material-ui/core'
// import { DOMAIN } from 'src/constants'
import 'swiper/swiper.min.css'
// import Iqama from 'src/assets/temp/iqama.jpg'

const useStyles = makeStyles((/* theme */) => ({
  root: {
    overflow: 'hidden',
    height: '100%'
  },
  swiper: {
    // height: '25%',
    margin: '20px -200px !important',
    '& .swiper-slide:not(.swiper-slide-next)': {
      transform: 'scale(0.8) !important',
      // background: 'red',
      zIndex: '-1 !important'
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
  image: {
    width: '100%',
  }
}))
SwiperCore.use([EffectCoverflow])

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <Swiper
        className={classes.swiper}
        spaceBetween={-30}
        effect="coverflow"
        loop
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className={classes.image}
            // src={Iqama}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            // src={Iqama}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            // src={Iqama}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            // src={Iqama}
            alt=""
          />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}
