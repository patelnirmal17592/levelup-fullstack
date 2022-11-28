//Connection to the MYSQL DB, GET, POST, PUT, DELETE methods go here

const { pool } = require("../config/database.js");
const { connect } = require("../routes/project.routes.js");

const getStudents = async (req, res) => {
  console.log("Received a GET request to /student-profile-viewer");
  const { teacherID } = req.params;
  // Run the SQL query, when you get a request to /
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      `select Student.Name, Student.ProfilePic from Student join Teacher on Student.TeacherID = ? = Teacher.TeacherID;`,
      [teacherID]
    );
    connection.release();
    // console.log(result);
    res.send(result);
  } catch (error) {
    if (error) {
      console.log("Error", error);
      res.send("You' got an error ! " + error.code);
    }
  }
};

module.exports = { getStudents };
