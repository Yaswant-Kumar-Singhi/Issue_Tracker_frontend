import React from 'react'
import { Route, Switch } from'react-router-dom'

import Home from './pages/Home'
import ProjectCreate from './pages/project/ProjectCreate'



const App = () =>{

  return(
    <div>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/project/create" component={ProjectCreate}/>

      </Switch>
      


    </div>
  )
}

export default App;
