const { pool } = require("../config/database.js");

//below controller gets all the projects from DB

// Nirmal's part below this line => Making query to get all projects data from DB for coming GET request
const getProjects = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(`SELECT * FROM Project`);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
// Nirmal's part above this line => Making query to get all projects data from DB for coming GET request



const getProjectById = async (req, res) => {
  const { projectId } = req.params;



  try {
    const connection = await pool.getConnection();

    const [result] = await connection.query(
      "SELECT * FROM Project WHERE ProjectID = ?",
      [projectId]
    );
    connection.release();
    res.send(result);
    console.log("done")
  } catch (error) {
    console.log("Error", error);
    res.send("No progress" + error.code);
  }

};

module.exports = {
  getProjects,
  getProjectById,
};

