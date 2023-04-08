import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./config/firebase-config";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/index";
import Signup from "./Pages/Signup/index";

function App() {
  const [email, setEmail] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('email')){
      setEmail(true);
    }
  }, [])
  return (
    <BrowserRouter>
      {!email && (
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      )}
      {email && (<><Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/trending" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
      </div><SimpleBottomNavigation/></>)}
    </BrowserRouter>
  );
}

export default App;
