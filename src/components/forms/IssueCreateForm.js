/*
import React from 'react'

const IssueCreateForm = ( {handleSubmit,
  handleChange,
  values
  }) => {

  const {
      title,
      description,
      author} = values

    

    return(
        
        <form onSubmit={handleSubmit}>
      <div className="form-group col-md-3 p-3">
        <label>Name</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value = {title}
          onChange={handleChange}
          
        />
      </div>

      <div className="form-group col-md-3 p-3">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value = {description}
          onChange={handleChange}
          
        />
      </div>

      <div className="form-group col-md-3 p-3">
        <label>Author</label>
        <input
          type="text"
          name="author"
          className="form-control"
          value = {author}
          onChange={handleChange}
         
        />
      </div>

      <br />
      <div className="col-md-3 p-3">
      <button className="btn btn-outline-info ">Save</button>
      </div>

    </form>
    )
}

export default IssueCreateForm;

*/

/*-------------------------------------------------------------------------------------------------------*/

import React from "react";
import { Select } from "antd";

const { Option } = Select;

const IssueCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleProjectChange
}) => {
  // destructure
  const {
    title,
    description,
    author,
    projects,
    project
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>author</label>
        <input
          type="text"
          name="author"
          className="form-control"
          value={author}
          onChange={handleChange}
        />
      </div>

     

      <div className="form-group">
        <label>Project</label>
        <select
          name="category"
          className="form-control"
          onChange={handleProjectChange}
        >
          <option>Please select</option>
          {projects.length > 0 &&
            projects.map((p) => (
              <option key={p._id} value={p._id}>
                {p.name}
              </option>
            ))}
        </select>
      </div>

     

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default IssueCreateForm;
