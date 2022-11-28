const { pool } = require("../config/database.js");
const bcrypt = require("bcrypt");

const teachersSignUp = async (req, res) => {
  const teacherName = req.body.teacherName;
  const teacherEmail = req.body.teacherEmail;
  const teacherPassword = req.body.teacherPassword;

  try {
    const hashPassword = bcrypt.hashSync(teacherPassword, 10);
    const connection = await pool.getConnection();

    const [result] = await connection.query(
      `SElect Email from Teacher WHERE Email = ?;`,
      [teacherEmail]
    );
    if (result.length > 0) {
      return res.status(404).send("User already exists");
    } else {
      await connection.query(
        `INSERT INTO Teacher (Name, Email, Password) VALUES (?, ?, ?)`,
        [teacherName, teacherEmail, hashPassword]
      );

      res.send(`Created new user with the email: ${teacherEmail}`);
    }
  } catch (err) {
    console.log(err?.message);
    res
      .status(400)
      .send(`error creating the user. ${JSON.stringify(err?.message)}`);
  }
};

module.exports = { teachersSignUp };
