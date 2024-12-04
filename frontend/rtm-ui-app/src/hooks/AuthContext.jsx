import { useContext, createContext, useState } from "react";
import * as jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode.default(localStorage.getItem("authTokens"))
      : null
  );

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    const response = await fetch("http://127.0.0.1:8000/rtm/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      console.log("Logged In!");
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    } else {
      console.log("There was an issue logging in!");
      alert("Something went wrong: " + response.status);
    }
  };

  const register = async (
    email,
    username,
    password,
    password2,
    fullName,
    annualDonation,
    hqLocation,
    geographicalFocus
  ) => {
    // registration logic here
  };

  return (
    <AuthContext.Provider value={{ user, authTokens, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
