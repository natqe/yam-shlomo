import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './index.scss'

const { documentElement: { style, clientHeight, clientWidth } } = document
style.setProperty(`--initial-vh`, `${clientHeight}px`)
style.setProperty(`--initial-vw`, `${clientWidth}px`)
ReactDOM.render(<App />, document.getElementById('root'))
