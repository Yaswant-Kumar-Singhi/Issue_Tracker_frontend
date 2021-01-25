import React, { useEffect, useState } from "react";
import { getProject} from "../../functions/project_function";
import SingleProject from "../../components/card/SingleProject";



const Project = ({ match }) => {
  const [project, setProject] = useState({});
  const { slug } = match.params;

  useEffect(() => {
    loadSingleProject();
  }, [slug]);

  

  const loadSingleProject = () => {
    getProject(slug).then((res) => {
      setProject(res.data);
    });
  };

  
  return (
    <div className="container-fluid">
      <div className="row pt-4 pb-4">
        <SingleProject
          project={project}
        />
      </div>
    </div>
  );
};

export default Project;
