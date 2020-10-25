import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (

		<form className='form-group'
			onSubmit={event => {
				event.preventDefault()
				if (!user.name) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Title</label>
			<input className='form-control' type="text" name="name" value={user.name} onChange={handleInputChange} />



			<button className='btn btn-primary ml-2  mt-2'>Add new user</button>
		</form>
	)
}

export default AddUserForm
