import React from 'react'
import { makeStyles } from '@material-ui/core'
// import { Link } from 'react-router-dom'
import Form from '../components/Form'

const useStyles = makeStyles((/* theme */) => ({
  root: {
    height: '100%'
  }
}))

const Services = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Form />
      {/* <Link to="/app/home">fsdfsdf</Link> */}
    </div>
  )
}

export default Services
