import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Home from "./components/Home"
import CategorySelection from './components/CategorySelection'
import NewEntry from './components/NewEntry'
import NotFound from "./components/NotFound"


const App = () => {
  return (
    <div >
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category Selection</Link></li>
            <li><Link to="/entry/new">NewEntry</Link></li>
          </ul>
          
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/category" component={CategorySelection}/>
            <Route path="/entry/new" component={NewEntry}/>
            <Route component={NotFound} />
          </Switch>
        </Router>
    </div>
  )
}

export default App
