// CSS
import "./App.css";
// Components
import Navbar from "./Components/Navbar";
// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Statistics from "./Pages/Statistics";
import Rules from "./Pages/Rules";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
// React
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Loader
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// axios
import axios from "axios";
// jwt-decode
import jwt_decode from "jwt-decode";
// react cookies
import { CookiesProvider } from "react-cookie";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/capital/today`);
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const countries = await response.json();
        setCountries(countries);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      setUser(jwt_decode(token));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem("user");
      if (token) {
        setUser(jwt_decode(token));
      }
    }, 1000); // Change the interval time as per your requirement - check every second for the token
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch the user data from the server
    const getUser = async () => {
      axios
        .get(`/auth/login/success`, {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) return response.data;
          throw new Error("Failed to authenticate user");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);

  // JWT Refresh Token
  const refreshToken = async () => {
    try {
      const response = await axios.post(`/api/refresh`, {
        token: user.refreshToken,
      });
      setUser({
        ...user,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  // Axios JWT - used to intercept requests and add the JWT token
  const axiosJWT = axios.create();

  // Add a request interceptor - to add the JWT token to the request
  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = `Bearer ${data.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <CookiesProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar user={user} />
          <div className="loadingDiv">
            {isLoading ? (
              <ClimbingBoxLoader
                className="loader"
                color="green"
                loading={isLoading}
                size={50}
              />
            ) : (
              <>
                {error && <div className="error">{error}</div>}
                <Routes>
                  <Route
                    path="/"
                    element={<Home country={countries} user={user} />}
                  />
                  <Route
                    path="/login"
                    element={user ? <Navigate to="/" /> : <Login />}
                  />
                  <Route
                    path="/register"
                    element={user ? <Navigate to="/" /> : <Register />}
                  />
                  <Route
                    path="/statistics"
                    element={<Statistics user={user} />}
                  />
                  <Route path="/rules" element={<Rules />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </>
            )}
          </div>
        </div>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
