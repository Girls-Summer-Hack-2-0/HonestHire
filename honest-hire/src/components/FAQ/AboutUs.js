import React from 'react';
import Menu from '../Menu';
import './AboutUs.css';
const AboutUs = () => {


    return (

        
        <div className = "container">
            < Menu />

            <div className = "questions">
                <h1>FAQs</h1>
                <div className = "faq">
                    <h2>What is this application?</h2> 
                    <h4>This application connects employers to potential employees, obscuring unecessary personal information, 
                        such as the gender and race of the applicant, from the employer to prevent bias in the selection and interview process.</h4>
                </div>
                <div className = "faq">
                    <h2>How is the information hidden on the appliaction?</h2> 

                    <h4>Information that could identify an applicant's demograpic such as the name of the applicant are not shown to
                        the employer and are only.</h4>
                </div>
                <div  className = "faq">
                    <h2>How does it obscure the information in live interviews?</h2> 

                    <h4>Through the use of voice modulation technology, we can allow users to convert or adjust their voice to a gender neutral
                        voice. Virtual reality is used to capture the interviewee's facial expression and present it on a virtual avatar when 
                        conversing.
                    </h4>
                </div>
                <div className = "faq">
                    <h2>What about the issue of proxy interviews?</h2> 
                    <h4>Our application will keep a database of users with their real names and faces. Face ID is be used to ensure that the
                        correct person is being interviewed. The application acts as a third party and only informs the employer that the identity 
                        has been confirmed without exposing the interviewee's identity.  
                    </h4>
                </div>
                <div className = "faq">
                    <h2>What about the issue of proxy interviews?</h2> 
                    <h4>Our application will keep a database of users with their real names and faces. Face ID is be used to ensure that the
                        correct person is being interviewed. The application acts as a third party and only informs the employer that the identity 
                        has been confirmed without exposing the interviewee's identity.  
                    </h4>
                </div>
            </div>

        </div>
    )
}




export default AboutUs;