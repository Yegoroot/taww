import React from 'react'
import SwiperIqama from 'src/components/Swiper/SwiperIqama'
import SwiperServices from 'src/components/Swiper/SwiperServices'
import Status from 'src/components/Status'
import { makeStyles } from '@material-ui/core'
import { user } from 'src/constants'

const useStyles = makeStyles((/* theme */) => ({
  root: {
    height: '100%'
  }
}))
const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>

      <SwiperIqama user={user} />
      <Status user={user} />
      <SwiperServices />
    </div>
  )
}

export default Home
