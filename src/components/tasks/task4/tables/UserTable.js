import React from 'react'

const UserTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Title</th>

        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>

            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="btn btn-info"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
    </tbody>
  </table>
)

export default UserTable
