const { pool } = require("../config/database.js");

const postHelpRequest = async (req, res) => {

  console.log('Received a POST request to /help-request');
  const { studentId, messages } = req.body;

  try {
    const connection = await pool.getConnection();
    await connection
      .query(`
     INSERT INTO missio20_team1.HelpRequest 
     (StudentID, Done, Message) VALUES (?, 'is false', ?);`,
        [studentId, messages]
      );

  } catch (error) {
    res
      .status(400)
      .send(`Error adding to DB. ${JSON.stringify(error?.message)}`);
  }
};


const getHelpRequest = async (req, res) => {
  console.log("Received a GET request to /help-request");
  const { teacherID } = req.params;

     // getting the information from the HelpRequest and Student tables in the database 

  try {
    const connection = await pool.getConnection();
    const [dataBase] = await connection.query(`
    SELECT HelpRequest.RequestID,  Student.Name, Student.StudentID, 
    HelpRequest.Done, HelpRequest.Message, Student.ProfilePic, 
    DATE_FORMAT(DateCreated ,'%d-%m-%Y %h:%m:%s') AS DateCreated,
    Student.TeacherID FROM missio20_team1.Student
    JOIN HelpRequest ON Student.StudentID=HelpRequest.StudentID
    WHERE Done IS false and TeacherID = ?;`,
    [teacherID]
    );

    // console.log(dataBase);
    res.send(dataBase);
  } catch (error) {
    res
      .status(400)
      .send(`Error adding to DB. ${JSON.stringify(error?.message)}`);
  }
};






const updateHelpRequest = async (req, res) => {

   // updating the HelpRequest table in the database DONE column to true so Request with {requestId} dissapears from the DB

  const { requestId } = req.body;
   console.log(requestId);
  try {
    const connection = await pool.getConnection();
    await connection.query(
      `
      UPDATE HelpRequest
      SET Done = true
      WHERE RequestID = ?;`,
      [requestId]
    ); 
    res.send(`updated requestId: ${requestId}`);
    // console.log(requestId);
  } catch (error) {
    res
      .status(400)
      .send(`Error adding to DB. ${JSON.stringify(error?.message)}`);
  }
  console.log("Received an update request to /help-request/update");
};

module.exports = { postHelpRequest, getHelpRequest, updateHelpRequest };

