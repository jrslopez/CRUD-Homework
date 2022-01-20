import React, { Fragment, useState, useEffect } from 'react'

function ListTodos() {

    const [todos, setTodos] = useState([])

    const getTodos = async () => {

        const res = await fetch("http://localhost:4000/todos")

        const todoArray = await res.json()

        setTodos(todoArray)
    }
    useEffect(() =>{
        getTodos()
    }, [])

    // console.log(todos)

    return (
        <Fragment>
            <table className="table mt-5">
                <thead>
                    <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                    {
                        todos.map(todo => (
                            <tr>
                                <td>{todo.description}</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Fragment>
    )}

export default ListTodos
