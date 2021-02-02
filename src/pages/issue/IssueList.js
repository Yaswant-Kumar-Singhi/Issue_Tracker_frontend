import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../components/card/HeaderComponent'
import {getIssues} from '../../functions/project_function'

const IssueList = () => {

    const [issues , setIssues ] = useState([])

    useEffect(()=>{
        loadAllIssues();
    },[])

    const loadAllIssues = () =>{
        
        getIssues().then((res)=>{
            setIssues(res.data)
            
        })
    }

    return(
        <div>
            <HeaderComponent />
            I am in add issue page
            <br />
            <div className="container">
                    <div className="row">
                        {issues.map((issue)=>(
                            <div key={issue._id} className="col-md-3 pb-3">                    
                               {issue.title} <br /> {issue.description}
                            </div>))}
                    </div>
                </div>

            
        </div>
    )

}

export default IssueList