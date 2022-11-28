const express = require("express");
const app = express();
const cors = require("cors");

const {
  teacherRouter,
  progressTrackerRouter
} = require("./routes/teacher.routes.js");

const { studentProfileRouter } = require("./routes/studentProfile.routes");
const router = require("./routes/project.routes");

const { helpRequestRouter } = require("./routes/helpRequest.routes.js");
const {
  helpRequestUpdateRouter,
} = require("./routes/helpRequestUpdate.routes.js");

const {
  studentRouter,
  signupRouter,
} = require("./routes/studentSignup.routes.js");
const { teacherSignupRouter } = require("./routes/teacherSignup.routes");
const {
  teachersLoginRouter,
  studentsLoginRouter,
} = require("./routes/login.routes");
const progressRouter = require("./routes/progress-history.routes");

//Student router
app.use(cors({ origin: "http://localhost:3000" }));
// app.use(cors());
app.use(express.json());
//Student router
app.use("/student-profile-view", studentRouter);
app.use("/student-signup", signupRouter);

app.use("/teacher", teacherRouter);
// app.use('/teacher/update-pic', teacherUpdatePicRouter);
app.use("/help-request", helpRequestRouter);
app.use("/help-request/update", helpRequestUpdateRouter);


app.use("/progress-history", progressRouter);

// /progress-history/students/2/projects/3

//Project & student profile router
app.use("/projects", router);                               //calls to get all projects
app.use("/student-profile", studentProfileRouter);          //gets student profile and also update edited data
app.use("/student-profile-picture", studentProfileRouter);  //updates the student profile picture

//Teacher router
app.use("/teacher-signup", teacherSignupRouter);
app.use("/progress-tracker", progressTrackerRouter);

//Login Router
app.use("/teacher-login", teachersLoginRouter);
app.use("/student-login", studentsLoginRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  "Server listening on port", port;
});
