/* eslint-disable react/prop-types */
import React, { ReactChild } from 'react'
import { Redirect } from 'react-router-dom'
// import useAuth from '../hooks/useAuth'

const AuthGuard = ({ children }:{children: ReactChild}) => {
  // const { isAuthenticated } = useAuth()
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Redirect to="/login" />
  }

  return (
    <>
      {children}
    </>
  )
}

export default AuthGuard
