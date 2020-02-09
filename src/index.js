import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'
import { CurrentUserProvider } from './contexts/currentUser'


ReactDOM.render(
  <CurrentUserProvider>
    <Router>
      <App />
    </Router>
  </CurrentUserProvider>
    , document.getElementById('root'));


