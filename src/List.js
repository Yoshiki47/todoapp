import React from 'react'
import Item from './Item'

const List = ({todos}) => {


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
            {todos.map((todo, index) => {
                return (
                    <Item key={index} content={todo.content} />
                )
            })}
        </ul>
    )
}

export default List