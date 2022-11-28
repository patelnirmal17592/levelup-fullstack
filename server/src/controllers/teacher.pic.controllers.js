// const { connection } = require("../config/database.js");

// const getTeacherPic = (req, res) => {
//     console.log('Received a GET request to /teacher/pic');

//     connection
//     .query(`SELECT ProfilePic FROM Teacher LIMIT 1;`, (error, result) => {
//         if (error) {
//             console.log("Error", error);
//             req.send("You've got an error!" + error.code);
//         } else {
//             res.send(result);
//             console.log(result);
//         }
//     });
// };

// module.exports = { getTeacherPic };