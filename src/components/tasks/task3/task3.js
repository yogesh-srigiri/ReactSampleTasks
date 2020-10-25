import React, { useEffect, useState } from 'react';
import moment from 'moment'
import axios from 'axios';

const TaskThree = props => {
    const initialFormState = [{
        firstName: '',
        lastName: '',
        position: '',
        office: '',
        date: '',
        salary: ''
    }]
    const [user, setUser] = useState(initialFormState)
    const [datatable, setDatatable] = useState([])
    const [show, setShow] = useState(false)






    const url = 'http://localhost:8800/'



    useEffect(() => {
        fetch(url).then(
            data => data.json()

        )
            .then(realData => setDatatable(realData.sort((a, b) => {
                let c = new Date(a.date);
                let d = new Date(b.date);
                return d - c;
            })))


            .catch(err => console.log(err.message))

    }, [datatable])




    console.log(moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'));


    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const addPosts = (user) => {
        axios.post(url, user).then(
            (response) => {
                console.log(response);
            }
        ).catch(err => console.log(err.message))

    }


    return (
        <div>



            <button className="btn btn-success" onClick={() => { setShow(true) }} >Add</button>




            { show && <form className='form-group container'
                onSubmit={event => {
                    event.preventDefault()
                    addPosts(user)
                    setShow(false)
                    setUser(initialFormState)
                }}
            >

                <input className='form-control-sm mr-2' placeholder='FirstName' type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
                <input className='form-control-sm mr-2' placeholder='LastName' type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
                <input className='form-control-sm mr-2' placeholder='positon' type="text" name="position" value={user.position} onChange={handleInputChange} />
                <input className='form-control-sm mr-2' placeholder='office' type="text" name="office" value={user.office} onChange={handleInputChange} />
                <input className='form-control-sm mr-2' type="date" name="date" value={user.date} onChange={handleInputChange} />
                <input className='form-control-sm mr-2' placeholder='salary' type="text" name="salary" value={user.salary} onChange={handleInputChange} />



                <button className='btn btn-primary ml-2  mt-2'>Add new user</button>
                <button className='btn btn-primary ml-2  mt-2' onClick={() => setShow(false)}>cancle</button>

            </form>
            }





            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">sl/no</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">position</th>
                        <th scope="col">office</th>
                        <th scope="col">date</th>
                        <th scope="col">salary</th>
                    </tr>
                </thead>
                {
                    datatable.map((p, index) => {
                        return (



                            <tbody key={p._id}>
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{p.firstName}</td>
                                    <td>{p.lastName}</td>
                                    <td>{p.position}</td>
                                    <td>{p.office}</td>
                                    <td>{moment(p.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                    <td>{p.salary}</td>
                                </tr>

                            </tbody>


                        )

                    })
                }
            </table>
        </div>
    )
}

export default TaskThree;