/* eslint-disable react/prop-types */
import React, { ReactChild } from 'react'
import { Redirect } from 'react-router-dom'
// import useAuth from '../hooks/useAuth'

const GuestGuard = ({ children }: {children: ReactChild}) => {
  // const { isAuthenticated } = useAuth()
  const isAuthenticated = false

  if (isAuthenticated) {
    return <Redirect to="/app/home" />
  }

  return (
    <>
      {children}
    </>
  )
}

export default GuestGuard
