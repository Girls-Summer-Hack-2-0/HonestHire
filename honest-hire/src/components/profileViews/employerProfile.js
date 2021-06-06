import React, { useState, useEffect } from "react";
import db, { auth } from "../../firebase";

const EmployerProfile = () => {
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [name, setName] = useState("");


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
                setName(doc.data().name);
                setEmail(doc.data().email);
                setCompany(doc.data().company);
              });
            })
            .catch((e) => console.log(e));
        }
        getInformation();
      }, []);

    return (
        
        <div className = "container">
            <br></br>
            <h1>Hello ! welcome to Blind Hiring web :D</h1>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>company: {company}</p>
        </div>
    )
}


export default EmployerProfile;