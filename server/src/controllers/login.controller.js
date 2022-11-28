const bcrypt = require("bcrypt");
const { pool } = require("../config/database.js");

const loginTeacher = async (req, res) => {
  const teacherEmail = req.body.teacherEmail;
  const teacherPassword = req.body.teacherPassword;

  if (!teacherEmail) {
    return res.status(400).send("User does not exist");
  }
  if (!teacherPassword) {
    return res.status(401).send("Wrong Password");
  }

  try {
    const connection = await pool.getConnection();

    const [result] = await connection.query(
      `SELECT * from Teacher WHERE Email = ?;`,
      [teacherEmail]
    );
    if (result.length === 0) {
      return res.status(400).send("Cannot find user with given Email.");
    }
    console.log(JSON.stringify(result));
    const { Password: realPassword } = result[0];
    const matchingPassword = await bcrypt.compareSync(
      teacherPassword,
      realPassword
    );
    if (matchingPassword) {
      result[0].Password = null;
      res.status(200).send(result[0]);
    } else {
      res.status(401).send("Login failed");
    }
    // res.status(responseStatus).send(responseMessage);
  } catch (error) {
    res.send(`Error logging in the user. ${JSON.stringify(error?.message)}`);
  }
};

const loginStudent = async (req, res) => {
  const studentEmail = req.body.studentEmail;
  const studentPassword = req.body.studentPassword;
  if (!studentEmail) {
    return res.status(400).send("User does not exist");
  }
  if (!studentPassword) {
    return res.status(401).send("Wrong Password");
  }

  try {
    const connection = await pool.getConnection();

    const [result] = await connection.query(
      `SELECT * from Student WHERE Email = ?;`,
      [studentEmail]
    );
    if (result.length === 0) {
      return res.status(400).send("Cannot find user with given Email.");
    }
    const { Password: realPassword } = result[0];
    const matchingPassword = await bcrypt.compare(
      studentPassword,
      realPassword
    );

    if (matchingPassword) {
      result[0].Password = null;
      res.status(200).send(result[0]);
    } else {
      res.status(401).send("Login failed");
    }
  } catch (error) {
    res.send(`Error logging in the user. ${JSON.stringify(error?.message)}`);
  }
};

module.exports = { loginTeacher, loginStudent };
