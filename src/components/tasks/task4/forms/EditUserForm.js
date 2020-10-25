import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form className='form-group'
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input className='form-control' type="text" name="name" value={user.name} onChange={handleInputChange} />


      <button className="btn btn-primary ml-2  mt-2">Update user</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-warning ml-2 mt-2">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
