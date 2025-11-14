"use client";
import React, { useState } from "react";
import "../styles/Login.css";
import { SendLoginData } from "@/lib/dbOperations";
import { LoginForm } from "@/components/login-form";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const data = { username, password }
  //     const result = await SendLoginData(data);
  //     console.log("Login successful:", result);
  //     // Handle successful login (redirect, etc.)
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="login-main-container">
      <LoginForm />
      {/* <form onSubmit={handleSubmit} className="login-form">
        <h2>Sign In</h2>

        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form> */}
    </div>
  );
}
