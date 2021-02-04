/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import {
  makeStyles, TextField, Button, FormControl, FormHelperText, OutlinedInput
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    flexDirection: 'column',
    padding: 20
  },
  title: {
    marginBottom: 15,
    // color: theme.palette.text.primary
  },
  input: {
    marginBottom: 15
  },
}))

const Form = () => {
  const [values, setValues] = useState({
    name: '',
    numberIqama: '',
    imgIqama: '',
    photo: ''
  })

  const onChange = (e: any) => {
    if (e.target.name === 'img') {
      const file = e.target?.files[0]
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setValues((oldState) => ({
          ...oldState,
          [e.target.id]: reader.result
        }))
      })
      reader.readAsDataURL(file)
    } else {
      setValues((oldState) => ({
        ...oldState,
        [e.target.id]: e.target.value
      }))
    }
  }

  const onClick = () => {
    console.log(values)
    localStorage.setItem('chrome-cache', JSON.stringify(values))
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>This Personal Data will save only in your device</h1>
      <TextField
        id="name"
        onChange={onChange}
        className={classes.input}
        label="Name LastName"
      />
      <TextField
        className={classes.input}
        id="numberIqama"
        onChange={onChange}
        type="number"
        label="Iqama's Number"
      />
      <FormControl
        fullWidth
        className={classes.input}
        variant="outlined"
      >
        <FormHelperText>Iqamq's photo</FormHelperText>
        <OutlinedInput
          id="imgIqama"
          type="file"
          name="img"
          onChange={onChange}
        />
      </FormControl>
      <FormControl
        fullWidth
        className={classes.input}
        variant="outlined"
      >
        <FormHelperText>Your mini Photo (like in Iqama)</FormHelperText>
        <OutlinedInput
          onChange={onChange}
          id="photo"
          type="file"
          name="img"
        />
      </FormControl>

      <Button
        variant="contained"
        onClick={onClick}
      >
        Save
      </Button>

    </div>
  )
}

export default Form
