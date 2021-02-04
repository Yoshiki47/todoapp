import React from 'react'
import Item from './Item'

const List = ({todos, deleteTodo}) => {


// オブジェクト型の値を定義    
// const user = {
//     id: 42,
//     name: "hoge"
// }

//　分割代入法を用いてオブジェクトの中身だけを取り出す
// const {id, name} = user
// console.log(name)

    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <Item
                        content={todo.content}
                        id={todo.id}
                        key={todo.id}
                        //? なぜここでdeletetodoを記述しているのか？
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}

export default List