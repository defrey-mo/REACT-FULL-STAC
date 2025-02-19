import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "final_year_projectdb",
});

// fetching students
app.get("/", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error on server" });
    return res.json(result);
  });
});

// adding students
app.post("/students", (req, res) => {
  /* const vlaues = [
    req.body.student_id,
    req.body.firstname,
    req.body.middlename,
    req.body.surname,
    req.body.dob,
    req.body.gender,
    req.body.medical_info,
    req.body.guardian_fullnames,
    req.body.guardian_phone,
    req.body.guardian_email,
    req.body.home_address,
    req.body.prev_school
  ] */
  const sql =
    "INSERT INTO students VALUE (" +
    `'${req.body.student_id}',
    '${req.body.firstname}',
    '${req.body.middlename}',
    '${req.body.surname}',
    '${req.body.dob}',
    '${req.body.gender}',
    '${req.body.medical_info}',
    '${req.body.guardian_fullnames}',
    '${req.body.guardian_phone}',
    '${req.body.guardian_email}',
    '${req.body.home_address}',
    '${req.body.prev_school}'
  );`;
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});


app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM students WHERE student_id = ?";
  const id = req.params.id;
  db.query(sql,[id], (err, result) => {
    if (err) return res.json({ Message: "Error on server" });
    return res.json(result);
  });
});

// app.put("/update/:id", (req, res) => {
//   const sql = "UPDATE students SET `student_id`=?, `firstname`=?, `middlename`=?, `surname`=?, `medical_info`=?, `guardian_fullnames`=?, `guardian_phone`=?, `guardian_email`=?, `home_address`=? WHERE student_id=?";
//   const id = req.params.id;
//   db.query(sql, [req.body.student_id, req.body.firstname, req.body.middlename, req.body.surname, req.body.medical_info, req.body.guardian_fullnames, req.body.guardian_email, req.body.home_address, id], (err, result) => {
//     if (err) return res.json({Message: "Error on server"});
//     return res.json(result);
//   }
    
//   )
// })


app.listen(8084, () => {
  console.log("The server is working");
});
