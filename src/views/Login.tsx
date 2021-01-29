import React from 'react'

import Input from '../components/Input'
import LockIcon from '../components/icons/inputs/Lock'

const Login = () => (
  <div>

    <Input
      icon={<LockIcon />}
      title="Current Password"
    />
    <Input
      icon={<LockIcon />}
      title="New Password"
    />
    <Input
      icon={<LockIcon />}
      title="Confirm New Password"
    />
  </div>
)

export default Login
