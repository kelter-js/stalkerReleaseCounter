import React from 'react'
import {render} from 'react-dom'
import './sass/style.sass'

function App () {
    return (
        <div className="container">
            <h1>Start</h1>
        </div>
    )
}

render (<App/>, document.querySelector('#root'));
