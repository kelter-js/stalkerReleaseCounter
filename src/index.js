import React from 'react'
import {render} from 'react-dom'
import './style.scss'

function Initialize() {
    return (
        <p>
            Hello World!
        </p>
    )
}

function App () {
    return (
        <div>
            <h1>Start</h1>
            <Initialize />
        </div>
    )
}

render (<App/>, document.querySelector('#root'));
