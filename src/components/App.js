import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import "../styles/git.css"

import store from "../store"
import Main from './Aside'
import Secondary from './Body'
import Third from './Header'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id="app">
        <Third />
        <Main />
        <Secondary />
        </div>
      </Router>
    </Provider>
  )
}

export default App
