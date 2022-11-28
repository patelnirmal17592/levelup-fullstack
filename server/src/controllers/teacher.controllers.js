const { pool } = require("../config/database.js");

const getTeacher = async (req, res) => {
  console.log("Received a GET request to /teacher");
  const { teacherID } = req.params;

  try {
    const connection = await pool.getConnection();
    const [dataBase] = await connection.query(
      `
        SELECT *, DATE_FORMAT(DateOfBirth ,
        '%d-%m-%Y') AS BirthDate 
        FROM Teacher Where Teacher.TeacherID = ?;`,
      [teacherID]
    );
    console.log(dataBase);
    res.send(dataBase);
  } catch (error) {
    res
      .status(400)
      .send(`Error getting teacher DB. ${JSON.stringify(error?.message)}`);
  }
};

module.exports = { getTeacher };
