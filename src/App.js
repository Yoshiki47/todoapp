import React, { useState } from 'react'
import {nanoid} from 'nanoid'
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
                        id: nanoid()  // ランダムなidを作成
                    }
                ])
        }

        const deleteTodo = id => {
            // 引数で受け取ったidとtodoにあるidが一致した時にそれを消す
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