import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Hello from 'components/Home/Hello'
import Ucenter from 'components/Ucenter/Ucenter'
import Counter from 'components/Chat/Counter'

const getRouter = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/counter">Chat</Link></li>
          <li><Link to="/ucenter">我的</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Hello}/>
          <Route path="/counter" component={Counter}/>
          <Route path="/ucenter" component={Ucenter}/>
        </Switch>
      </div>
    </Router>
  )
}

export default getRouter