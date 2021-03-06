import React , { useState, useEffect } from 'react'
import HeaderComponent from '../../components/card/HeaderComponent'
import ProjectCreateForm from '../../components/forms/ProjectCreateForm'
import {create} from '../../functions/project_function'

const initialState = {
    name: "Apple",
    description: "This is the best Apple product",
    author: "Steve",
}


const ProjectCreate = () =>{
    const [values, setValues] = useState(initialState);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        create(values)
          .then((res) => {
            console.log(res);
            window.alert(`"${res.data.name}" is created`);
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
            <ProjectCreateForm 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            />

        </div>
    )

}

export default ProjectCreate;

 /*-----------------------------------------------------------------*/
    
  


