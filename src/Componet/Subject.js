import React from "react";


function PrintEmail(props) {

    return (

        <>
            {props.emails.map((fullEmail) => {

                //  sender, recipient, subject, message,date,id
                const {subject, id, sender, recipient, message, date} = fullEmail
                if (id === 5)
                return (<div key={id}>
                    <br/>
                    <p>Sender: {sender}</p>
                    <p>Recipient: {recipient}</p>
                    <p>Subject: {subject}</p>
                    <p>Message: {message}</p>
                    <p>Date: {date}</p>
                    <p>Id: {id}</p>


                        {/*Code Goes Here Email Already Exist*/}

                        </div>)

                })}
        </>)

}

export default PrintEmail;


