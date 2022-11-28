// const { pool } = require("../config/database.js");

// const updateProfilePic = async (req, res) => {
//     console.log('Received a POST request to /teacher/update-pic');
    
//     const { profilePic, teacherId } = req.body;

//   try {
//     const connection = await pool.getConnection();
// await connection
// .query(`
//     UPDATE missio20_team1.Teacher 
//     SET ProfilePic = '?' WHERE TeacherID = ?;`,
//     [profilePic, teacherId]
// );
//   } catch (error) {
//   res.status(400).send(`Error adding pic to DB. ${JSON.stringify(error?.message)}`);
// }
// };

// module.exports = { updateProfilePic };
