const { pool } = require("../config/database");

//below controller makes query based on studentId to get all information described

const controller = async (req, res) => {
  const id = req.params.id;
  console.log(`This is the student id:${id} requested!`);

  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      `select StudentID, Student.Name as 'StudentName', Student.School, Teacher.Name as 'TeacherName', Student.Course, date_format(Student.DateOfBirth, '%D %M %Y') as 'DateOfBirth', Student.ContactNumber, Student.Email, Student.ProfilePic from Student join Teacher on Student.TeacherID = Teacher.TeacherID WHERE StudentID = ?`,
      [id]
    );
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

// Below controller sends image to particular studentID and send a resonse to frontend

const profilePictureController = async (req, res) => {
  const id = req.params.id;
  const uploads = req.body.imageUrl;
  console.log("Image URL coming from req:", req.body.imageUrl);

  try {
    const connection = await pool.getConnection();
    const currentPicture = await connection.query(
      `Update Student set ProfilePic = ? where StudentID = ?;`,
      [uploads, id]
    )
    console.log(currentPicture[0].changedRows)
      if (currentPicture[0].changedRows === 1) {
        res.status(200).send(`✅ Success! Profile picture is updated.`);
      }
      
  } catch (err) {
    console.log(err);
  }
};

//below controller handles edited data going to DB and send res back to frontend

const editProfile = async (req, res) => {

  const ofStudent = req.params.id;
  const {School, Course, DateOfBirth, ContactNumber} = req.body;
  console.log(req.body)
  
  try {
    const connection = await pool.getConnection();
    const editProfileData = await connection.query(
      `Update Student set School = ?, DateOfBirth = ?, ContactNumber = ?, Course = ? where StudentID = ?;`,
      [School, DateOfBirth, ContactNumber, Course, ofStudent]
    )
    console.log(editProfileData)
    if (editProfileData[0].changedRows === 1) {
      res.status(200).send('✅ Success! Your profile has been updated.')
    }
  } catch (err) {
    console.log(err.code)
  }

};

module.exports = { controller, profilePictureController, editProfile };
