import React , { useState, useEffect } from 'react'
import HeaderComponent from '../../components/card/HeaderComponent'
import IssueCreateForm from '../../components/forms/IssueCreateForm'
import {createIssue} from '../../functions/project_function'

const initialState = {
    title: "asdbug",
    description: "bugasd",
    author: "Steve",
}


const IssueCreate = () =>{
    const [values, setValues] = useState(initialState);
    

    
   

    return (
        <div>
            <HeaderComponent/>
            <br />
            <IssueCreateForm 
            
            values={values}
            />

        </div>
    )

}

export default IssueCreate;

 /*-----------------------------------------------------------------*/
    
  


