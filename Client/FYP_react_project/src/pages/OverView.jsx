import React, { useEffect, useState } from "react";
import "../CSS/overview.css";
import axios from "axios";

export default function OverView({ students, fetchStudents, setActivePage }) {
  setActivePage("overview");
    const [data, setData] = useState ([])
  useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <p className="para">Students List</p>
      <table id="table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Surname</th>
            <th>Guardian Names</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
            {data.map((students, index) =>{
            return  <tr key={index}>
            <td>{students.student_id}</td>
            <td>{students.firstname}</td>
            <td>{students.middlename}</td>
            <td>{students.surname}</td>
            <td>{students.guardian_fullnames}</td>
            <td style={{textTransform:"none"}}>{students.guardian_email}</td>
            <td>
              <button className='read'>Read</button>
              <button className="update">Update</button>
              <button className="delete">Delete</button>
            </td>
          </tr>}
          
            )}
        
        </tbody>
      </table>
    </div>
  );
}
