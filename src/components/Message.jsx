import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  const date = new Date();
  const time = date.getHours()+':'+ date.getMinutes();
  return (
    <div className={`chat-bubble ${message.name === user.displayName ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
        <p className="msg-time">{time}</p>
      </div>
    </div>
  );
};

export default Message;