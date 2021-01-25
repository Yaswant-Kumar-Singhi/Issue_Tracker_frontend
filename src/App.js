import React from 'react'
import { Route, Switch } from'react-router-dom'

import Home from './pages/Home'
import ProjectCreate from './pages/project/ProjectCreate'
import SingleProject from './pages/project/SingleProject'



const App = () =>{

  return(
    <div>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/project/create" component={ProjectCreate}/>
        <Route  exact path="/project/:slug" component={SingleProject}/>

      </Switch>
      


    </div>
  )
}

export default App;
