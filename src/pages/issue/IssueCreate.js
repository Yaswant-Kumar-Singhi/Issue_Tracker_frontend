/*
import React , { useState, useEffect } from 'react'
import HeaderComponent from '../../components/card/HeaderComponent'
import IssueCreateForm from '../../components/forms/IssueCreateForm'
import {createIssue , getProjects , getProject} from '../../functions/project_function'

const initialState = {
    title: "asdbug",
    description: "bugasd",
    author: "Steve",
    project : ""
}


const IssueCreate = () =>{
    const [values, setValues] = useState(initialState);
    

    useEffect(() => {
      loadProjects();
    }, []);
  
    const loadProjects = () =>
      getProjects().then((p) => setValues({ ...values, project: p._id }));

    //const {_id} = project

    const handleSubmit = (e) => {
        e.preventDefault();
        createIssue(values)
          .then((res) => {
            console.log(res);
            window.alert(`"${res.data.title}" is created`);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            // if (err.response.status === 400) toast.error(err.response.data);
            
          });
      };

      const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        // console.log(e.target.name, " ----- ", e.target.value);
      };


    
   

    return (
        <div>
            <HeaderComponent/>
            <br />
            <IssueCreateForm 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values} />

        </div>
    )

}

export default IssueCreate;

 

 */

 /*----------------------------------------------------------------------------*/

 
import React, { useState, useEffect } from "react";
import { createIssue , getProjects  } from "../../functions/project_function";
import HeaderComponent from '../../components/card/HeaderComponent'
import IssueCreateForm from '../../components/forms/IssueCreateForm'



const initialState = {
  title: "I am title",
  description: "I am description",
  author : "I am author ",
  projects: [],
  project: "",
};

const IssueCreate = () => {
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () =>
    getProjects().then((p) => setValues({ ...values, projects: p.data }));

  const handleSubmit = (e) => {
    e.preventDefault();
    createIssue(values)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
       
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleProjectChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, project : e.target.value });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <HeaderComponent />
        </div>

       

          <IssueCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleProjectChange={handleProjectChange}
            
          />
        </div>
      </div>
    
  );
};

export default IssueCreate;


