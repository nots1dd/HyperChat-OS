import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from '../firebase';
import add from "../img/addpic.png";

const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];
  
      try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
  
        //Create a unique image name
        const storageRef = ref(storage, displayName );
  
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
                password: password,
              });

              navigate("/home");
  
            } catch (err) {
              console.log(err);
              setErr(true);
            }
          });
        });
      } catch (err) {
        setErr(true);
      }
    };
  

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">HyperChat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name"/>
                    <input type="mail id" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display: "none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={add} alt="" />
                        <span>Add a pic!</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong, try again</span>}
                </form>
                <p>Have an account already? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register;