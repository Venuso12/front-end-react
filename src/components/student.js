
import React, { useState } from "react";
import "../App.css";
import axios from "axios";

function Student() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5168/api/Student/AddStudent",
        values
      );
      console.log("Response from server:", response.data);
      alert("Student data saved successfully!");
    } catch (error) {
      console.error("Error saving student data:", error);
      alert("Failed to save student data. Please try again.");
    }
  };

  const resetForm = () => {
    setValues({ firstname: "", lastname: "", email: "" });
  };

  return (
    <div className="container">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          onChange={handleChanges}
          required
          value={values.firstname}
        />

        <label htmlFor="lastname">Last Name*</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname" // Fixed from "Lastname" to "lastname"
          onChange={handleChanges}
          required
          value={values.lastname}
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChanges}
          required
          value={values.email}
        />

        <button type="button" onClick={resetForm}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Student;
