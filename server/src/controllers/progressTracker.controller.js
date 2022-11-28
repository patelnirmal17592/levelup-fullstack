const { pool } = require("../config/database.js");

const progressTracker = async (req, res) => {
  const { teacherID } = req.params;

  try {
    const connection = await pool.getConnection();

    const [progress] = await connection.query(
      `
        select Student.Name, Student.StudentID, ProgressHistory.DateCompleted, ProgressHistory.ProjectID
        from Student 
        left join ProgressHistory on ProgressHistory.StudentID = Student.StudentID
        Where Student.TeacherID = ?;
        `,
      [teacherID]
    );
    connection.release();

    //Creating new array of objects.
    let studentData = [];

    //Function to check if StudentID is the same on student and projects
    const isExistingStudent = (project) => {
      const checkIfExistingStudent = (student) =>
        student.StudentID === project.StudentID;
      return studentData.findIndex(checkIfExistingStudent) !== -1
        ? true
        : false;
    };

    //looping over the data from the DB
    progress.forEach((project) => {
      const isExisting = isExistingStudent(project);
      if (isExisting) {
        const checkIfExistingStudent = (student) =>
          student.StudentID === project.StudentID;
        const studentElementIndex = studentData.findIndex(
          checkIfExistingStudent
        );
        //Pushing projects if the student exists
        studentData[studentElementIndex].ProjectList.push({
          ProjectID: project.ProjectID,
          DateCompleted: project.DateCompleted,
        });
        //creating new student if student doesn't exists
      } else {
        studentData.push({
          Name: project.Name,
          StudentID: project.StudentID,
          ProjectList: [
            {
              ProjectID: project.ProjectID,
              DateCompleted: project.DateCompleted,
            },
          ],
        });
      }
    });
    //mapping over StudentData array and filtering
    const studentDataWithProjectNo = studentData.map((student) => {
      const completedProjects = student.ProjectList.filter(
        (project) => project.DateCompleted
      );
      const noOfCompletedProjects = completedProjects.length;
      return {
        ...student,
        noOfCompletedProjects,
      };
    });

    res.send(studentDataWithProjectNo);
  } catch (error) {
    if (error) {
      console.log("error", error);
      res.send("you got an error" + error.code);
    }
  }
};

module.exports = { progressTracker };
