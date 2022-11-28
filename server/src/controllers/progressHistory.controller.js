const pool = require('../config/database.js')

const getProgressHistoryByStudentID = async(req, res) => {
  console.log('receive from getProgress')
  const {studentID} = req.params;
    
  try {
      const connection = await pool.getConnection()
      const [result] = await connection.query(`SELECT * FROM ProgressHistory 
      WHERE StudentID = ?`, [studentID]
      )
      console.log(result)
      res.send(result)}
      catch(error) {
      console.log("Error", error);
      res.send("No progress" + error);
      }
}


const saveProgressHistory = async(req, res)=>{
  const {studentID, projectID} = req.params
  const submission = req.body.submission

  try {
    const connection = await pool.getConnection()
    await connection.query(
      `UPDATE ProgressHistory SET Submission = ? WHERE StudentID = ? AND ProjectID = ?`, [submission, studentID, projectID]
    )
    const [result] = await connection.query(`SELECT * FROM ProgressHistory 
      WHERE StudentID = ? AND ProjectID = ?`, [studentID, projectID]
      )
      console.log(result)
      res.send(result)
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .send(`error creating the user. ${JSON.stringify(err?.message)}`);
  }
}


module.exports = {
  getProgressHistoryByStudentID,
  saveProgressHistory
}