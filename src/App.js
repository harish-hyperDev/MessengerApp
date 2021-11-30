//import logo from './logo.svg';
//import { initializeApp } from "firebase/app";
import './App.css';
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button'
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { FormControl, InputLabel, Input } from '@mui/material';
import Message from './Message';
import dbb from './firebase';
import { query, onSnapshot, collection, orderBy } from "firebase/firestore";
import { addDoc } from "firebase/firestore"; 
import firebase from 'firebase/compat';
//import { FieldValue } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    //{username: 'diablo', message: 'bo aki mayiro.. shamu nuga'},
    //{username: 'hyperx', message: 'owai moo'}
  ]);
  const [username, setUsername] = useState('');

  // useEffect is used for running a piece of code based on a condition  

  useEffect(() => { 
    const q = query(collection(dbb,"messages"), orderBy('timestamp', 'desc'))    
    
    const unsub = onSnapshot(q, (querySnapshot) => {   
      //orderBy('timestamp','desc');
      //setMessages("Messages", querySnapshot.docs.map(d => doc.data()));
      querySnapshot.forEach((doc) => {
        setMessages(querySnapshot.docs.map(doc => doc.data()));
      });
    console.log(unsub);
    
    /*
      dbb.collection('messages').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
    */
    });
  }, [] )

  /*
  useEffect(() => {
    const q = query(collection(dbb, "messages"))
    const unsub = onSnapshot(q, (querySnapshot) => {
    //setMessages("Messages", querySnapshot.docs.map(d => doc.data()));
      querySnapshot.forEach((doc) => {
        messages.add({username: username, message: input});
      });
      console.log(unsub);    
    });
  }, [] );*/


  
  useEffect(() => {
    setUsername(prompt('Enter your username'));
  }, [] ) // [] is condition, if left blank code will run only once when "app" component loads

  /* 
    so if we use the input variable value changes the "code" in useEffect will run
    its really cool as "input" variable is a useState so "input" will change instaneously without any refresh and "useEffect" will run automatically as "input" is changing 
  */

  

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();   //for not refreshing the page for form


    //setMessages( [...messages, {username: username, message: input} ]);

    // all the logic to send message
    /*async () => {
      try{
          await addDoc(doc(dbb, "messages"), {
            username: username,
            message: input,
        })
        return 1;
      }
      catch (error) {console.log(error)}

      
    }*/

    //try {
      addDoc(collection(dbb, "messages"), {
        username: username,
        message: input,    
        timestamp: firebase.firestore.Timestamp.now(),
      });
    //  console.log("Document written with ID: ", docRef.id);
    //} catch (e) {
    //  console.error("Error adding document: ", e);
    //}
    
   /*
    async () => {
      const citiesCol = collection(dbb, 'cities');
      const citySnapshot = await setDocs(citiesCol);
    }*/
    

    setInput('');
  }

  

  return (
    <div className="App">
      <h1>GHOST Chat</h1>
      <h2>Sup' {username}</h2>

      

      {/*input field*/}
      <form>
      <FormControl>
        <InputLabel>Enter message..</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button variant="contained" color="primary" disabled={!input} type='submit' onClick={sendMessage}>Send Message</Button>
      </FormControl>                
      </form>
      
      {/*messages*/}
      {
        
        messages.map(message => (
          <Message username={username} message={message} />
          //<p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
