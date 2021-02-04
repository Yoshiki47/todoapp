import React, {useState} from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState("")
    
    const handleSubmit= (e) => {
        // formの内容をtodoの配列に追加する処理を書く
        e.preventDefault()

        // もし、valueの値が空ならhandleSubmitの処理を中断する(関数の実行を止めるにはreturnすればそれ以降の関数の処理は実行されない)
        if (!value.trim()) {
            return;
        }

        addTodo(value)        
        // valueの値を空にする
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