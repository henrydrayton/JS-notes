import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Home from "./components/Home"
import CategorySelection from './components/CategorySelection'
import NewEntry from './components/NewEntry'
import NotFound from "./components/NotFound"


const App = () => {
  const defaultCategories = ["Food", "Coding", "other"]
  const [categories, setCategories] = useState(defaultCategories)
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
            <Route path="/category" render={(props) => <CategorySelection {...props} categories={categories}/>}/>
            <Route path="/entry/new" render={(props) => <NewEntry {...props} categories={categories}/>}/>
            <Route component={NotFound} />
          </Switch>
        </Router>
    </div>
  )
}

export default App
