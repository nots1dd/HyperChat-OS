import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import Home from "./screens/home";
import Login from "./screens/login";
import Register from "./screens/register";


function App() {
  const [user] = useAuthState(auth);
  const ProtectedRoute = ({children}) => {
    if(user === null){
      return <Navigate to="login" />;
    }

    return children
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
          <ProtectedRoute>
            <Login/>
          </ProtectedRoute>
        }/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="home" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
