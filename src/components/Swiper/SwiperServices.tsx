/* eslint-disable import/extensions */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core'
import 'swiper/swiper.min.css'
import HealthPassport from 'src/components/icons/HealthPassport'
import Microscope from 'src/components/icons/Microscope'
import { KeyboardArrowRight } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    margin: 20,
    display: 'flex',
    'margin-top': 30,
    'justify-content': 'space-between'
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  link: {
    color: theme.palette.text.secondary,
    fontSize: 13,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center'
  },
  wrapSlide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.palette.primary.main,
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
    padding: '10px 0px',
    // paddingBottom: 10,
    marginBottom: 5,
    borderRadius: 10,
    boxShadow: theme.shadows[1],
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    height: 'auto !important'
  },
  arrow: {
    fontSize: 20,
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
          <KeyboardArrowRight className={classes.arrow} />
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
            <Microscope />
            <span>
              Covid-19 Test
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <div className={classes.wrapSlide}>
            <HealthPassport />
            <span>
              Health Condition Card
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <div className={classes.wrapSlide}>
            <HealthPassport />
            <span>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Children's Education Status
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
