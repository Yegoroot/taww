import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow } from 'swiper'
import { makeStyles } from '@material-ui/core'
import 'swiper/swiper.min.css'
import { UserType } from '../../constants'
import Pagination from './Pagination'
import { SlideIqama, SlideNumberIqama } from './Slides'

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden',
    paddingBottom: 4,
    // height: '100%'
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
    }
  }
}))
SwiperCore.use([EffectCoverflow])

const SwiperIqama = ({ user }: {user: UserType}) => {
  const classes = useStyles()
  const [marker, setMarker] = useState(false)
  return (
    <div className={classes.root}>

      <Swiper
        className={classes.swiper}
        spaceBetween={-30}
        effect="coverflow"
        loop
        slidesPerView={3}
        onSlideChange={() => setMarker((state) => !state)}
      >
        <SwiperSlide>
          <SlideIqama />
        </SwiperSlide>
        <SwiperSlide>
          <SlideNumberIqama user={user} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideIqama />
        </SwiperSlide>
        <SwiperSlide>
          <SlideNumberIqama user={user} />
        </SwiperSlide>
      </Swiper>
      <Pagination marker={marker} />
    </div>
  )
}

export default SwiperIqama
