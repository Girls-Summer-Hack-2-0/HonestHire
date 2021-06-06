import React, { useState, useEffect } from "react";
import db, { auth } from "../../firebase";

const EmployeeProfile = () => {
  const [position, setPosition] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [graduation, setgraduation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function getInformation() {
      console.log(auth.currentUser);
      const email = auth.currentUser?.email;
      if (email) {
        await db
          .collection("users")
          .where("email", "==", email)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());

              setPosition(doc.data().Position);
              setSkills(doc.data().Skills);
              setEducation(doc.data().education);
              setgraduation(doc.data().graduation);
              setExperience(doc.data().Experience);
              setProjects(doc.data().projects);
              setUsername(doc.data().username);
            });
          })
          .catch((e) => console.log(e));
      }
    }
    getInformation();
  }, []);

  return (
    <div className="container">
      <br></br>
      <h1>Hello ! welcome to Blind Hiring web :D</h1>
      <p>Position: {position}</p>
      <p>Education: {education}</p>
      <p>Graduation: {graduation}</p>
      <p>Experience: {experience}</p>
      <p>Projects: {projects}</p>
      <p>Username: {username}</p>
      <p>Skills: {skills}</p>
    </div>
  );
};

export default EmployeeProfile;
