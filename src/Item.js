import React from 'react'

const Item = ({content}) => {
    const [isDone, setIsDone] = React.useState(false);

    console.log(isDone);
    return (
        <li>
            <input type="checkbox" onChange={()=> {
                setIsDone(!isDone)
            }} />
            <span style={{textDecoration: isDone ? 'line-through' : 'none'}}>{content}</span>
        </li>
    )
}


export default Item