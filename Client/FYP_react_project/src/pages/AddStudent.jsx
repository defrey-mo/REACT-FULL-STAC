import React, { useEffect, useState } from "react";
import "../CSS/add.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddStudent({ setAppTitle, setActivePage }) {
  setActivePage("add-student");

  const randNum = Math.floor(Math.random() * 100000);

  const [student_id, setstudent_id] = useState("STU-" + randNum);
  const [firstname, setfirstname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [surname, setsurname] = useState("");
  const [guardian_email, setguardian_email] = useState("");
  const [guardian_fullnames, setguardian_fullnames] = useState("");
  const [medical_info, setmedical_info] = useState("");
  const [gender, setgender] = useState("male");
  const [dob, setdob] = useState("");
  const [guardian_phone, setguardian_phone] = useState("");
  const [home_address, sethome_address] = useState("");
  const [prev_school, setprev_school] = useState("");

  /*  {

} */

  function clearBtn(e) {
    e.preventDefault();

    //setreg_no("");
    setfirstname("");
    setmiddlename("");
    setlastname("");
    setemail("");
    setguardian_name("");
    setmedical_info("");
    setgender("");
    setdob("");
    setphone("");
    sethome_address("");
    setprev_school("");
  }
  const content = {
    "student_id": student_id,
    "firstname": firstname,
    "middlename": middlename,
    "surname": surname,
    "dob": dob,
    "gender": gender,
    "medical_info": medical_info,
    "guardian_fullnames": guardian_fullnames,
    "guardian_phone": guardian_phone,
    "guardian_email": guardian_email,
    "home_address": home_address,
    "prev_school": prev_school,
  }

  const requestConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url:'http://localhost:8081/students',
    headers:{
      "content-type":"application/json",
      accept:"application/json"
    },
    data: content
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.request(requestConfig)
      .then(res => {
        console.log(res);
        navigate('/system/overview')
      })  
      .catch(err => console.log(err));
  };
  
  return (
    <>
      <div className="main-form">
        <h1>Student Registration Form</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <section>
              <fieldset>
                <legend>Basic Details</legend>

                <span>
                  <label>Student Number</label>
                  <input
                    disabled
                    onChange={(e) => setstudent_id(e.target.value)}
                    value={student_id}
                    type="text"
                    name="student-id"
                    id="student-id"
                    required
                  />
                </span>

                <span>
                  <label>FirstName</label>
                  <input
                    onChange={(e) => setfirstname(e.target.value)}
                    value={firstname}
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                  />
                </span>

                <span>
                  <label>Middle Name</label>
                  <input
                    onChange={(e) => setmiddlename(e.target.value)}
                    value={middlename}
                    type="text"
                    name="middle-name"
                    id="middle-name"
                  />
                </span>

                <span>
                  <label>Surname</label>
                  <input
                    onChange={(e) => setsurname(e.target.value)}
                    value={surname}
                    type="text"
                    name="surname"
                    id="surname"
                    required
                  />
                </span>

                <span>
                  <label>Date of Birth</label>
                  <input
                    onChange={(e) => setdob(e.target.value)}
                    value={dob}
                    type="date"
                    name="dob"
                    id="dob"
                    placeholder="dd/mm/yyyy"
                    required
                  />
                </span>

                <span>
                  <label>Gender</label>
                  <select
                    onChange={(e) => setgender(e.target.value)}
                    value={gender}
                    name="gender"
                    id="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </span>

                <span>
                  <fieldset>
                    <legend className="medical">Medical Information</legend>
                    <label>
                      Pre-existing Medical Conditions if Any
                    </label>
                    <textarea
                      onChange={(e) => setmedical_info(e.target.value)}
                      value={medical_info}
                      style={{ maxWidth: "95%" }}
                      name="medical-condition"
                      id="medical-condition"
                      rows="10"
                    ></textarea>
                  </fieldset>
                </span>
              </fieldset>

              {/* <fieldset>
                <legend>Medical Information</legend>
              </fieldset> */}
            </section>

            <aside>
              <fieldset>
                <legend>Guardian Contact Information</legend>
                <span>
                  <label>First Name</label>
                  <input
                    onChange={(e) => setguardian_fullnames(e.target.value)}
                    value={guardian_fullnames}
                    type="text"
                    name="emergency-phone"
                    id="emergency-phone"
                    required
                  />
                </span>
                {/* <span>
                  <label for="emergency-phone">Last Name</label>
                  <input
                  
                    type="text"
                    name="emergency-phone"
                    id="emergency-phone"
                    required
                  />
                </span> */}
                <span>
                  <label>Phone Number</label>
                  <input
                    onChange={(e) => setguardian_phone(e.target.value)}
                    value={guardian_phone}
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="07xxxxxxxx"
                    required
                  />
                </span>
                <span>
                  <label>Email </label>
                  <input
                    onChange={(e) => setguardian_email(e.target.value)}
                    value={guardian_email}
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </span>

                <span>
                  <label>Home Address</label>
                  <textarea
                    onChange={(e) => sethome_address(e.target.value)}
                    value={home_address}
                    name="address"
                    id="address"
                    rows="4"
                    required
                  ></textarea>
                </span>

                <fieldset>
                  <legend>Previous school if any</legend>

                  <span>
                    <label>School Name</label>
                    <input
                      onChange={(e) => setprev_school(e.target.value)}
                      value={prev_school}
                      type="text"
                      name="emergency-name"
                      id="emergency-name"
                    />
                  </span>
                </fieldset>
                <div className="registering-buttons">
                  <div>
                    <button onClick={clearBtn} type="reset">
                      Clear
                    </button>
                  </div>
                  <div className="save">
                    <button type="submit">Save</button>
                  </div>
                </div>
              </fieldset>
            </aside>
          </form>
        </div>
      </div>
    </>
  );
}
