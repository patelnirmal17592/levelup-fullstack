const { pool } = require("../config/database.js");
const bcrypt = require("bcrypt");

const studentSignUp = async (req, res) => {
  const studentName = req.body.studentName;
  const studentEmail = req.body.studentEmail;
  const studentPassword = req.body.studentPassword;

  try {
    const hashPassword = bcrypt.hashSync(studentPassword, 10);
    const connection = await pool.getConnection();
    console.log("request received");

    const [result] = await connection.query(
      `select Email from Student WHERE Email = ?;`,
      [studentEmail]
    );
    if (result.length > 0) {
      return res.status(404).send("User already exists");
    } else {
      await connection.query(
        `INSERT INTO Student (Name, Email, Password) VALUES (?, ?, ?)`,
        [studentName, studentEmail, hashPassword]
      );
      res.send(`Created new user with the email: ${studentEmail}`);
    }
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .send(`error creating the user. ${JSON.stringify(err?.message)}`);
  }
};

module.exports = { studentSignUp };
