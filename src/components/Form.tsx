/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import {
  makeStyles, TextField, Button, FormControl, FormHelperText, OutlinedInput
} from '@material-ui/core'
// import { useHistory } from 'react-router-dom'

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
  // const history = useHistory()
  const [values, setValues] = useState({
    name: '',
    numberIqama: '',
    photoIqama: '',
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
    const isNotAll = Object.values(values).includes('')

    if (isNotAll) {
      alert('Not all data was filled in')
      return
    }
    localStorage.setItem('user', JSON.stringify(values))
    globalThis.location.reload()
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>This Personal Data will save only in your device</h1>
      <TextField
        id="name"
        onChange={onChange}
        required
        className={classes.input}
        label="Name LastName"
      />
      <TextField
        className={classes.input}
        id="numberIqama"
        onChange={onChange}
        type="number"
        required
        label="Iqama's Number"
      />
      <FormControl
        fullWidth
        className={classes.input}
        variant="outlined"
      >
        <FormHelperText>Iqamq's photo</FormHelperText>
        <OutlinedInput
          id="photoIqama"
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
        <FormHelperText>Your mini Photo</FormHelperText>
        <OutlinedInput
          onChange={onChange}
          id="photo"
          type="file"
          required
          name="img"
        />
      </FormControl>

      <Button
        variant="contained"
        onClick={onClick}
        color="primary"
      >
        Save
      </Button>

    </div>
  )
}

export default Form
