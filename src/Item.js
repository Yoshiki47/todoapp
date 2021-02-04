import React from 'react'

const Item = ({content, id, deleteTodo}) => {
    const [isDone, setIsDone] = React.useState(false);
    
    const handleDelete = () => {
        deleteTodo(id)
    }

    // console.log(isDone);
    return (
        <li>
            <input type="checkbox" onChange={()=> {
                setIsDone(!isDone)
            }} />
            <span style={
                {textDecoration: isDone ? 'line-through' : 'none'}
            }>{content}</span>
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}


export default Item