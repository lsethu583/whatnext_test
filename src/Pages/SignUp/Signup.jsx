// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};
//     const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!usernameRegex.test(username)) {
//       newErrors.username =
//         "Username must be 3-16 characters (letters, numbers, underscores).";
//     }

//     if (!emailRegex.test(email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }

//     if (!passwordRegex.test(password)) {
//       newErrors.password =
//         "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
//     }

//     if (password != confirmPassword) {
//       newErrors.confirmPassword = "Password must be same";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Data:", { username, email, password, confirmPassword });
//     if (validateForm()) {
//       alert("Account created successfully");
//     } else {
//       alert("Error in account creation");
//     }
//     navigate("/verify-otp", { state: { email } });
//   };

//   return (
//     <div style={styles.background}>
//       <div style={styles.container}>
//         <h2 style={styles.title}>Create an Account</h2>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div style={styles.inputGroup}>
//             <label>Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               style={styles.input}
//               required
//             />
//             {errors.username && <p style={styles.error}>{errors.username}</p>}
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               style={styles.input}
//               required
//             />
//             {errors.email && <p style={styles.error}>{errors.email}</p>}
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               style={styles.input}
//               required
//             />
//             {errors.password && <p style={styles.error}>{errors.password}</p>}
//           </div>
//           <div style={styles.inputGroup}>
//             <label> Confirm Password:</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Enter your password again"
//               style={styles.input}
//               required
//             />
//             {errors.confirmPassword && (
//               <p style={styles.error}>{errors.confirmPassword}</p>
//             )}
//           </div>
//           <button type="submit" style={styles.button}>
//             Sign Up
//           </button>
//           <p style={styles.loginText}>
//             Already have an account?{" "}
//             <a href="/login" style={styles.loginLink}>
//               Login here
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   background: {
//     backgroundImage: "url('./bg_maincontent')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     // backgroundImage: "url('./bg_maincontent')", // Replace with your actual image path
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     padding: "30px",
//     borderRadius: "15px",
//     boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
//     maxWidth: "400px",
//     width: "100%",
//     textAlign: "center",
//     color: "#fff", // Adjust text color for better visibility
//   },

//   title: {
//     marginBottom: "20px",
//     fontSize: "28px",
//     color: "#000000",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   inputGroup: {
//     marginBottom: "15px",
//     textAlign: "left",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     fontSize: "14px",
//     color: "#000000",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#008CBA",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//     transition: "background-color 0.3s",
//   },
//   error: {
//     color: "red",
//     fontSize: "12px",
//     marginTop: "5px",
//   },
//   loginText: {
//     marginTop: "10px",
//     fontSize: "14px",
//     color: "#FFFFFF",
//   },
//   loginLink: {
//     color: "#008CBA",
//     textDecoration: "none",
//     fontWeight: "bold",
//   },
// };


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../services/apiService";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!usernameRegex.test(username)) {
      newErrors.username =
        "Username must be 3-16 characters (letters, numbers, underscores).";
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords must match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", { username, email, password, confirmPassword });

    if (validateForm()) {
      const data = {
        username,
        email,
        password,
      };
      apiService.signup(data);
      alert("Account created successfully!");
      navigate("/verify-otp", { state: { email } });
    } else {
      alert("Error in account creation. Please check the form.");
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.title}>Create Your Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={styles.input}
              required
            />
            {errors.username && <p style={styles.error}>{errors.username}</p>}
          </div>
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
            {errors.email && <p style={styles.error}>{errors.email}</p>}
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
            {errors.password && <p style={styles.error}>{errors.password}</p>}
          </div>
          <div style={styles.inputGroup}>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              style={styles.input}
              required
            />
            {errors.confirmPassword && (
              <p style={styles.error}>{errors.confirmPassword}</p>
            )}
          </div>
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
          <p style={styles.signupText}>
            Already have an account?{" "}
            <a href="/login" style={styles.signupLink}>
              Login here
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
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
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
