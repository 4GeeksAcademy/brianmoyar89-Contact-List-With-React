import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContact = () => {
  
  const [name, setName] = useState ("");
  const [email, setEmail] = useState ("");
  const [number, setNumber] = useState ("");
  
  const contacts = useSelector((state) => state);

  const handleSubmit = (e) => {

    e.preventDefault();
    
    const checkEmail = contacts.find(contact=> contact.email === email && email);

    const checkNumber = contacts.find(
      (contact)=> contact.number === parseInt(number)
    );

    
    if (!email || !number || !name ) {
      return toast.warning("Please fill in all fields!");
    }

    if(checkEmail){
      return toast.error("This Email Already Exist!");
    }

    if(checkNumber){
      return toast.error("This Number Already Exist!");
    }


  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-5">
          <h1 className="display-3 text-center mb-4">Add Student</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name} onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email} onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={number} onChange={e => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
