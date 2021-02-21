import React, { useEffect, useState } from "react";
import { getProject} from "../../functions/project_function";
import SingleProject from "../../components/card/SingleProject";
import IssueCard from "../../components/card/IssueCard";



const Project = ({ match }) => {
  const [project, setProject] = useState({});
  const [issue , setIssue] = useState([{}])
  const { slug } = match.params;

  useEffect(() => {
    loadSingleProject();
  }, [slug],[]);

  

  const loadSingleProject = () => {
    getProject(slug).then((res) => {
      console.log(JSON.stringify(res.data.issue))
      setProject(res.data.project);
      setIssue(res.data.issue);

    });
  };

  
  return (
    <div className="container-fluid">
      <div className="row pt-4 pb-4">
        <SingleProject
          project={project}
        />
      </div>

      <div className="row">
        <div className="col-md-3">
        <IssueCard issue={issue}></IssueCard>
        </div>
      </div>
      
    </div>
  );
};

export default Project;
