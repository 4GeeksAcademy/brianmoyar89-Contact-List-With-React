import React from "react";
import { Link, useParams } from "react-router-dom";

const EditContact = ()=> {
    const {id} = useParams();
    return (
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-5">
          <h1 className="display-3 text-center mb-4">Edit Student {id}</h1>
          <form>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <input
                type="submit"
                value="Update Student"
                className="btn btn-dark"
              />
              <Link to="/" className="btn btn-danger mx-2">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default EditContact