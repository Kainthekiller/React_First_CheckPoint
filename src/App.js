import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Sender from "./Componet/Sender";
import Subject from "./Componet/Subject";
import sender from "./Componet/Sender";

const App = (props) => {
  // Use State
            //Value  //Use this to change it
    const [emails, setEmail] = useState([{}]);
    const [newEmail, setNewEmail] = useState({sender: "Bob", recipient: "nick",
           subject: "I Love To Be At Home", message: "How Much Wood Would a wood chuck if a wood chuck could chuck wood. He Would chuck all the wood a wood chuck could chuck"
    })



    //email.Subject
    //email.Sender
                        //I am creating a function
    useEffect( () => {
        fetch("http://localhost:3001/emails")
            .then((res) => {
                return res.json();
            })
            .then(data => {
                setEmail(data);


            })
    })

  //Custom Methods


//Main Start
    return (

        <div className="App">
            <h1>This is Working</h1>

            <Sender emails={emails}/>

            <Subject emails={emails}/>


        </div>
        //Main End
    );
}

export default App;
