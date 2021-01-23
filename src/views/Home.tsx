import React from 'react'
import SwiperHome from 'src/components/Swiper/SwiperHome'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((/* theme */) => ({
  root: {
    height: '100%'
  }
}))
const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>

      <SwiperHome />
    </div>
  )
}

export default Home
