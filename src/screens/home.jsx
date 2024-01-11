import React from "react";
import ChatBox from "../components/ChatBox";
import NavBar from "../components/NavBar";

const Home = () => {
    return(
        <div className="home">
            <div className="container">
                <NavBar/>
                <ChatBox/>
            </div>
        </div>
    )
}

export default Home;