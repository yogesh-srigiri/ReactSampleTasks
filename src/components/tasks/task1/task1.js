import React, { useState } from 'react';


const TaskOne = props => {

    const [show, setShow] = useState(false)

    let myArray = [
        {
            id: 1,
            transport: "Air",
            load: "Vatican Vaticano",
            created: "10/03/2020, 12:12:12"
        },

        {
            id: 2,
            transport: "Air",
            load: "Paris",
            created: "01/01/2020, 11:11:11"
        },
        {
            id: 3,
            transport: "Air",
            load: "Paris",
            created: "30/05/2020, 10:10:10"
        },
        {
            id: 4,
            transport: "Air",
            load: "Paris",
            created: "15/12/2020, 09:09:09"
        }
    ]
    let updateArray = [...myArray]

    const sortedArray = () => {

        updateArray.sort(function (a, b) {
            let c = new Date(a.created);
            let d = new Date(b.created);
            return c - d;
        });
        return updateArray;
    }




    sortedArray()




    let Items = props => {
        return (
            <div className="card">
                <ul>

                    <li>{props.transport}</li>
                    <li>{props.load}</li>
                    <li>{props.created}</li>

                </ul>
            </div>
        )
    }




    return (
        <div className="container ">
            <h4 text-center >Write an algorithm to sort an object using object's 'datetime' element as sorting key/index click on "SORT"</h4>


            <button className="btn btn-dark" onClick={() => setShow(true)}>SORT</button>

            <div className="container">
                <div className="row">
                    <div className='col-sm'>
                        <h6 text-center>UNSORTED ARRAY</h6>

                        {
                            myArray.map((arr) => {
                                return <Items key={arr.id} transport={arr.transport} load={arr.load} created={arr.created} />

                            })
                        }
                    </div>



                    <div className='col-sm'>
                        <h6 >SORTED ARRAY</h6>

                        {
                            show &&
                            updateArray.map((arr) => {
                                return <Items key={arr.id} transport={arr.transport} load={arr.load} created={arr.created} />

                            })
                        }
                    </div>
                </div>
            </div>


        </div>



    )
}

export default TaskOne;