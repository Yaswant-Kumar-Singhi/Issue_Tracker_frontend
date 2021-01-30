import React from 'react'
import { Route, Switch } from'react-router-dom'

import Home from './pages/Home'
import ProjectCreate from './pages/project/ProjectCreate'
import Project from './pages/project/Project'
import IssueCreate from './pages/issue/IssueCreate'



const App = () =>{

  return(
    <div>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/project/create" component={ProjectCreate}/>
        <Route  exact path="/project/:slug" component={Project}/>
        <Route  exact path='/issue' component={IssueCreate}/>

      </Switch>
      


    </div>
  )
}

export default App;
