import React, { Children } from 'react';
import Tree from 'react-d3-tree';
import './task2.css'

// {
//     a: {b, c},
//     c: {d, e},
//     d: {f, g},
//     e: {h, i},
//     f: {j, k},
//     g: {l, m}
//     }


const TaskTwo = props => {


    const myTreeData = [
        {
            name: 'A',
            children: [
                {
                    name: 'B',
                },
                {
                    name: 'C',
                    children: [
                        {
                            name: 'D',
                            children: [
                                {
                                    name: 'F',
                                    children: [
                                        {
                                            name: 'J'
                                        },
                                        {
                                            name: 'K'
                                        }
                                    ]
                                },
                                {
                                    name: 'G',
                                    children: [
                                        {
                                            name: 'L'
                                        },
                                        {
                                            name: 'M'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'E',
                            children: [
                                {
                                    name: 'H'
                                },
                                {
                                    name: 'I'
                                }
                            ]
                        }
                    ]
                },

            ],

        },

    ];
    return (
        <div id='container'>
            <div>
                <h4>The Tree is scrollabe & Possition can be changed by holding it and draging It</h4>
            </div>



            <Tree data={myTreeData} />


        </div>








    )
}



export default TaskTwo;