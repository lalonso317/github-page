import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import "../styles/git.css"

import store from "../store"
import Main from './Main'
import Secondary from './Secondary'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
        <Main />
        <Secondary />
        </div>
      </Router>
    </Provider>
  )
}

export default App
