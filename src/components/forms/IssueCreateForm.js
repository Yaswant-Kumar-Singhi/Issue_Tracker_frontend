import React from 'react'

const IssueCreateForm = () => {
    return(
        <> 
        <div>
            I am issue create form
        </div>

        <form >
        <div className="form-group col-md-3 p-3">
            <label>Title</label>
            <input
            type="text"
            name="name"
            className="form-control"
          
         
             />
        </div>

        <div className="form-group col-md-3 p-3">
            <label>Description</label>
            <input
            type="text"
            name="Description"
            className="form-control"
          
         
             />
        </div>

        <div className="form-group col-md-3 p-3">
            <label>Author</label>
            <input
            type="text"
            name="Author"
            className="form-control"
          
         
             />
        </div>

        <br />
      <div className="col-md-3 p-3">
      <button className="btn btn-outline-info ">Save</button>
      </div>

        
      </form>
        </>
    )
}

export default IssueCreateForm