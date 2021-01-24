import React from 'react'

const ProjectCreateForm = ({
    handleSubmit,
    handleChange,
    values
    }) => {

    const {
        name,
        description,
        author} = values

    return(
        
        <form onSubmit={handleSubmit}>
      <div className="form-group col-md-3 p-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={handleChange}
         
        />
      </div>

      <div className="form-group col-md-3 p-3">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
         
        />
      </div>

      <div className="form-group col-md-3 p-3">
        <label>Author</label>
        <input
          type="text"
          name="author"
          className="form-control"
          value={author}
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

export default ProjectCreateForm;