import React from 'react'
import { makeStyles } from '@material-ui/core'
import SwiperIqama from '../components/Swiper/SwiperIqama'
import SwiperServices from '../components/Swiper/SwiperServices'
import Status from '../components/Status'
import Tabaud from '../components/Tabaud'
import Notification from '../components/Notification'
import { user } from '../constants'
import Form from '../components/Form'

const useStyles = makeStyles((/* theme */) => ({
  root: {
    height: '100%'
  }
}))
const Home = () => {
  const classes = useStyles()

  return (!localStorage.getItem('user'))
    ? <Form />
    : (
      <div className={classes.root}>

        <Notification />
        <SwiperIqama user={user} />
        <Status user={user} />
        <SwiperServices />
        <Tabaud />
      </div>
    )
}

export default Home
