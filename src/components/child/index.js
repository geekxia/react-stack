import React from 'react'

function Child(props) {
    function handle() {
        console.log('handle')
    }
    return(
        <div onClick={handle}>
            <h1>{props.msg}</h1>
        </div>
    )
}

export default Child