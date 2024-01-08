import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import ChatBox from "./components/ChatBox";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;
