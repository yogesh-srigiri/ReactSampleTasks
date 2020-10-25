import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'


const TaskFour = () => {
    // Data
    const usersData = [
        { id: 1, name: 'yogseh' },
        { id: 2, name: 'rahul' },
        { id: 3, name: 'nitesh' },
    ]

    const initialFormState = { id: null, name: '', username: '' }

    // Setting state
    const [users, setUsers] = useState(usersData)
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const [editing, setEditing] = useState(false)

    // CRUD operations
    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setEditing(false)

        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)

        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    return (
        <div className="container text-center">
            <h1>To-do-list client side</h1>
            <div >
                <div >
                    {editing ? (
                        <Fragment>
                            <h2>Edit</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </Fragment>
                    ) : (
                            <Fragment>
                                <h2>Add</h2>
                                <AddUserForm addUser={addUser} />
                            </Fragment>
                        )}
                </div>
                <div >
                    <h2>View TO-DO</h2>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    )
}

export default TaskFour
