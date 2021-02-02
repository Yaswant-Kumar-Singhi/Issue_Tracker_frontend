import React from 'react'
import { Route, Switch } from'react-router-dom'

import Home from './pages/Home'
import ProjectCreate from './pages/project/ProjectCreate'
import Project from './pages/project/Project'
import IssueCreate from './pages/issue/IssueCreate'
import IssueList from './pages/issue/IssueList'



const App = () =>{

  return(
    <div>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/project/create" component={ProjectCreate}/>
        <Route  exact path="/project/:slug" component={Project}/>
        <Route  exact path='/issue' component={IssueCreate}/>
        <Route  exact path='/issuelist' component={IssueList}/>


      </Switch>
      


    </div>
  )
}

export default App;
