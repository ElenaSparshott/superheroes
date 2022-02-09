import React from 'react'

function Input({onChange, onClick}) {

    return (
        <div>
            <input type="text" onChange={onChange}> 
            </input>
            <button onClick={onClick}>press me</button>
        </div>
    )
}

export default Input

