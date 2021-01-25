import React from 'react'

const IssueCreateForm = () => {

    
    return(
        
        <form >
      <div className="form-group col-md-3 p-3">
        <label>Name</label>
        <input
          type="text"
          name="title"
          className="form-control"
          
         
        />
      </div>

      <div className="form-group col-md-3 p-3">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          
          
         
        />
      </div>

      <div className="form-group col-md-3 p-3">
        <label>Author</label>
        <input
          type="text"
          name="author"
          className="form-control"
          
          
          
          
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