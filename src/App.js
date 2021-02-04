import React, { useState } from 'react'
import shortid from 'shortid'
import Form from './Form'
import List from './List'

const App = () => {
    const [todos, setTodos] = useState([])
        /** 
         * todoに追加する処理
         * @param content {string} todoに追加するテキスト
        */
        const addTodo = content => {
                setTodos([
                    ...todos,
                    {
                        content,
                        id: shortid.generate()
                    }
                ])
        }

        const deleteTodo = id => {
            setTodos(todos.filter(todo => todo.id !== id))
        }

    // ここで設定したtodoをItemコンポーネントのcontentに表示できるようにする 
    return (
        <>
            <h1>TODO APP</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
        </>
    )
}

export default App