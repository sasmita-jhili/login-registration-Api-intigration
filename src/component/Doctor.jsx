import React from 'react'
import { useSelector } from 'react-redux'
const Doctor = () => {
  const role = useSelector((state) => state.LoginReducer.roleId)
  return (
    <div>
      <h1>Welcome {role}</h1>
    </div>
  )
}

export default Doctor
