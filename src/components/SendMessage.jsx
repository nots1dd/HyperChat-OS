import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

const SendMessage = ({ scroll }) => {
  const [msg, setMessage] = useState("");
  const username = auth.currentUser?.displayName;

  

  const sendMessage = async (event) => {
    event.preventDefault();
    if (msg.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: msg,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });

  };
  
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type message..."
        value={msg}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
      <div><p className="user-info">Logged in as {username}</p></div>
    </form>
  );
  
  
};

export default SendMessage;