import React, { useState, useEffect } from "react";
import db, { auth } from "../firebase";
import Menu from "./Menu";

const Home = () => {
  const [companyName, setName] = useState("");

  useEffect(() => {
    async function getInformation() {
      console.log(auth.currentUser);
      const email = auth.currentUser?.email;
      console.log(email);
      await db
        .collection("recruiters")
        .where("email", "==", email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setName(doc.data().company);
          });
        })
        .catch((e) => console.log(e));
    }
    getInformation();
  }, []);
  return (
    <div>
      <Menu />
      <br></br>
      <h1>Hello ! welcome to Blind Hiring web :D</h1>
      <p>{companyName}</p>
      <p>
        <button onClick={() => auth.signOut()}>signOut</button>
      </p>
    </div>
  );
};

export default Home;
