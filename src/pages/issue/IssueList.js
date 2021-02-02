import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../components/card/HeaderComponent'
import IssueCard from '../../components/card/IssueCard'
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
                            <div key={issue._id} className="col-md-4 pb-3">                    
                               <IssueCard issue={issue} />
                            </div>))}
                    </div>
                </div>

            
        </div>
    )

}

export default IssueList