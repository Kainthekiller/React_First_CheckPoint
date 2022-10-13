import React from "react";
// import Subject from "./Subject";




function Sender(props) {

        return (
                 // emails.emails
            <>
                    {props.emails.map((AnythingIWant) => {
                            const {sender, id, subject} = AnythingIWant;
                            return (<div key={id}>
                                        <p>Sender: {sender}</p>
                                        <p>Subject: {subject}</p>
                                <br/>
                                </div>)

                    })}

            </>);
}





export default Sender;