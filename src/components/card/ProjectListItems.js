import React from "react";
import { Link } from "react-router-dom";

const ProjectListItems = ({ project }) => {
  const {
    name,
    description,
    author
  } = project;

  return (
    <ul className="list-group">
      <li className="list-group-item">
        Careated By : {" "}
        <span className="label label-default label-pill float-right">
           {author}
        </span>
      </li>

      <li className="list-group-item">
        Description : {" "}
        <span className="label label-default label-pill float-right">
           {description}
        </span>
      </li>

      

      </ul>

  );
};

export default ProjectListItems;
