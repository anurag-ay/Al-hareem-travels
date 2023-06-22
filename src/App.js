import NavBar from "./Components/navbar";
import Home from "./Components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/footer";
import SignUp from "./Components/signup";
import SignIn from "./Components/signin";
import { useEffect, useState } from "react";
import axios from "./api/axios";

function App() {
  const token = localStorage.getItem("auth-token");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    if (token) {
      const verifyToken = async () => {
        try {
          const res = await axios.post("/auth", { auth_token: token });
          if (res.status === 200) {
            setIsValidToken(true);
          }
          const { firstName, lastName, email, phone } = res?.data;
          setFirstName(firstName);
          setLastName(lastName);
          setphone(phone);
          setEmail(email);
        } catch (err) {
          setIsValidToken(false);
        }
      };
      verifyToken();
    }
    setIsValidToken(false);
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <NavBar
          isValidToken={isValidToken}
          firstName={firstName}
          lastName={lastName}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
              />
            }
          />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
