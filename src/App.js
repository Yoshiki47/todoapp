import React from 'react'
import Form from './Form'
import List from './List'

const App = () => {
    const todos = [
        {
            content: '課題をする'
        },
        {
            content: '料理を作る'
        },
        {
            content: '作った料理を食べる'
        },
        {
            content: '寝る'
        }
    ]
    return (
        <>
            <h1>TODO APP</h1>
            <Form />
            <List todos={todos} />
        </>
    )
}

export default App