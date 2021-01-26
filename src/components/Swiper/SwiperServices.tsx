/* eslint-disable import/extensions */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core'
import 'swiper/swiper.min.css'
import HealthPassport from 'src/components/icons/HealthPassport'

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    margin: 20,
    display: 'flex',
    'margin-top': 30,
    'justify-content': 'space-between'
  },
  title: {
    color: theme.palette.primary.main
  },
  link: {

  },
  wrapSlide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 13,
    padding: 10,
    '& svg': {
      fontSize: 40,
      marginBottom: 8
    }
  },
  slide: {
    width: '140px !important',
    border: 'solid 1px #fff',
    padding: '16px 0px',
    marginBottom: 5,
    borderRadius: 10,
    background: theme.palette.background.default,
    color: theme.palette.text.primary
  }
}))

const SwiperServices = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <span className={classes.title}> New Services</span>
        <span className={classes.link}>
          Display All
          {' '}
          &gt;
        </span>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
      >
        <SwiperSlide className={classes.slide}>
          <div className={classes.wrapSlide}>
            <HealthPassport />
            <span>
              Health Passport
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <div className={classes.wrapSlide}>
            <HealthPassport />
            <span>
              Health Passport
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <div className={classes.wrapSlide}>
            <HealthPassport />
            <span>
              Health Passport
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <div className={classes.wrapSlide}>
            <HealthPassport />
            <span>
              Health Passport
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <div className={classes.wrapSlide}>
            <HealthPassport />
            <span>
              Health Passport
            </span>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default SwiperServices
