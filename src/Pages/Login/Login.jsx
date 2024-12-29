import React, { useState } from "react";
import apiService from "../../services/apiService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
    const data = {
      email,
      password,
    };
    apiService.login(data);
    alert("Logged in successfully!");
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.title}>Welcome Back</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
          <p style={styles.signupText}>
            New here?{" "}
            <a href="/signup" style={styles.signupLink}>
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: "url('./login_bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    breadth: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "28px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#5092b7",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  signupText: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#547eb5",
  },
  signupLink: {
    color: "#5092b7",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
