import React from "react";
import "./style.css";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("1");
  const [allUser, setAllUser] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: name,
      department: department,
      rating: rating,
    };
    setAllUser([...allUser, newUser]);
  };
  return (
    <>
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <div className="main-container">
          <form onSubmit={handleSubmit}>
            <center>
              <div>
                <label htmlFor="name">Name : </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  onChange={(props) => setName(props.target.value)}
                  value={name}
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor="department">Department : </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  placeholder="Enter ur department"
                  required
                  onChange={(props) => setDepartment(props.target.value)}
                  value={department}
                />
              </div>
              <br />
              <div>
                <label htmlFor="rating">Rating : </label>
                <input
                  type="number"
                  placeholder="Enter rating"
                  name="rating"
                  id="rating"
                  onChange={(props) => setRating(props.target.value)}
                  value={rating}
                  required
                />
              </div>
              <br />
              <button className="sub-btn" type="submit" value="Submit">
                Submit{" "}
              </button>
            </center>
          </form>
        </div>
      </div>
      <div className="show-data">
          <div className="table-show">
            {allUser.map((data) => (
              <tbody>
                <td>Name : {data.name} |
                Department : {data.department} |
                Rating : {data.rating}</td>
              </tbody>
            ))}
          </div>
      </div>
    </>
  );
}

export default Form;
