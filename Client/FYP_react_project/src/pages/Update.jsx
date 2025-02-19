import React, { useEffect, useState } from 'react'
import '../CSS/update.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Update({setActivePage }) {
  setActivePage("update-student")

  const {id} = useParams();

  useEffect(() => {
    axios.get('http://localhost:8084/read/'+id)
    .then(res => { 
      console.log(res)
      setValues({...values, studentNo:res.data[0].student_id, 
        firstname:res.data[0].firstname,
        middlename:res.data[0].middlename,
        surname:res.data[0].surname,
        medical_info:res.data[0].medical_info,
        guardian_fullnames:res.data[0].guardian_fullnames,
        guardian_phone:res.data[0].guardian_phone,
        guardian_email:res.data[0].guardian_email,
        home_address:res.data[0].home_address
      })
    })
    .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate();

  const [values, setValues] = useState({})
  const handleUpdate = (event) => {
    e.preventDefault();
    axios.put('http://localhost:8084/update/'+id, values)
    .then(res => {
      console.log(res)
    }).catch(err => console.log(err));
  }

  

  return (
      <>
        <div className='updating'>
          <h2>Update Students Details</h2>
          <div className="form">
          <form onSubmit={handleUpdate}>
            <section>
              <fieldset>
                <legend>Basic Details</legend>
                <span>
                  <label>Student Number</label>
                  <input
                    disabled
                    onChange={e => setValues({...values, studentNo: e.target.value})}
                    value={values.studentNo}
                    type="text"
                    name="student-id"
                    id="student-id"
                    required
                  />
                </span>
                <span>
                  <label>FirstName</label>
                  <input
                    onChange={e => setValues({...values, firstname: e.target.value})}
                    value={values.firstname}
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                  />
                </span>

                <span>
                  <label>Middle Name</label>
                  <input
                    onChange={e => setValues({...values, middlename: e.target.value})}
                    value={values.middlename}
                    type="text"
                    name="middle-name"
                    id="middle-name"
                  />
                </span>

                <span>
                  <label>Surname</label>
                  <input
                    onChange={e => setValues({...values, surname: e.target.value})}
                    value={values.surname}
                    type="text"
                    name="surname"
                    id="surname"
                    required
                  />
                </span>

                <span>
                  <fieldset>
                    <legend className="medical">Medical Information</legend>
                    <label>
                      Pre-existing Medical Conditions if Any
                    </label>
                    <textarea
                      onChange={e => setValues({...values, medical_info: e.target.value})}
                      value={values.medical_info}
                      style={{ maxWidth: "95%" }}
                      name="medical-condition"
                      id="medical-condition"
                      rows="10"
                    ></textarea>
                    <legend>Student Conduct</legend>
                    
                    <label>
                      Please input students behaviour and conduct
                    </label>
                    <textarea
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
                
                <legend>Description</legend>                
                <span>
                  <label>Status</label>
                  <input
                    type="text"
                    name="emergency-phone"
                    id="emergency-phone"
                  />
                </span>
                <span>
                  <label>Conduct Description</label>
                  <textarea
                    name="address"
                    id="address"
                    rows="4"
                  ></textarea>
                </span>

                <fieldset>
                  <legend>Guardian Contact Information</legend>
                <span>
                  <label>Full Names</label>
                  <input 
                    onChange={e => setValues({...values, guardian_fullnames: e.target.value})}
                    value={values.guardian_fullnames}
                    type="text"
                    name="emergency-phone"
                    id="emergency-phone"
                    required
                  />
                </span>
                <span>
                  <label>Phone Number</label>
                  <input
                  onChange={e => setValues({...values, guardian_phone: e.target.value})}
                  value={values.guardian_phone}
                    type="tel"
                    name="phone"
                    id="phone"
                  />
                </span>
                <span>
                  <label>Email </label>
                  <input
                    onChange={e => setValues({...values, guardian_email: e.target.value})}
                    value={values.guardian_email}
                    type="email"
                    name="email"
                    id="email"
                  />
                </span>
                <span>
                  <label>Home Address</label>
                  <textarea
                    onChange={e => setValues({...values, home_address: e.target.value})}
                    value={values.home_address}
                    name="address"
                    id="address"
                    rows="4"
                    required
                  ></textarea>
                </span>
                </fieldset>
                <div className="registering-buttons">
                  <div>
                    <button type="reset">
                      Clear
                    </button>
                  </div>
                  <div className="save">
                    <button type="submit">Update</button>
                  </div>
                </div>
              </fieldset>
            </aside>
          </form>
          </div>
          
        </div>
      </>
  )
}
