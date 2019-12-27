import React from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalFeed from './GlobalFeed/GlobalFeed'
import Article from './Article/Article'
import Authentication from './Authentication/Authentication'

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={GlobalFeed} />
      <Route exact path='/login' component={Authentication} />
      <Route exact path='/register' component={Authentication} />
      <Route path='/articles/:slug' component={Article} />
    </Switch>
  )
}
