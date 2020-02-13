import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'
import { CurrentUserProvider } from './contexts/currentUser'
import CurrentUserChecker from './Components/CurrentUserChecker'


ReactDOM.render(
  <CurrentUserProvider>
    <CurrentUserChecker>
      <Router>
        <App />
      </Router>
    </CurrentUserChecker>
  </CurrentUserProvider>
    , document.getElementById('root'));


