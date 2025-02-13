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

app.listen(8081, () => {
  console.log("The server is working");
});
