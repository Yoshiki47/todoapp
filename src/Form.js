import React, {useState} from 'react'

const Form = ({ todos, setTodos }) => {
    const [value, setValue] = useState("")
    const handleSubmit= (e) => {
        // formの内容をtodoの配列に追加する処理を書く
        e.preventDefault()
        // console.log(...todos);
        if (value == "") {
            alert('内容が空です')
            return;
        }
        setTodos([
            ...todos,
            {
                content: value
            }
        ])
        setValue("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            value={value}
            type="text"
            onChange={e => {
                // console.log(e.target.value)
                setValue(e.target.value)
            }}
            />
        </form>
    )
}

export default Form