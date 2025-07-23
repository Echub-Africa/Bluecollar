// src/pages/OAuthSuccess.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");
    const email = query.get("email"); // optional: if backend sends it

    if (token) {
      localStorage.setItem("home-ownerToken", token);
      localStorage.setItem("home-ownerEmail", email || ""); // optional
      navigate("/client"); // or wherever you want to redirect
    } else {
      navigate("/clientAuth/login"); // fallback
    }
  }, []);

  return <p>Signing in with Google...</p>;
};

export default OAuthSuccess;
