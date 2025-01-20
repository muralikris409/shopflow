"use client";
import { resetPassword } from "@/app/service/UserService";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const searchQuery = useSearchParams();
  const token = searchQuery.get("token");

  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      setError("All fields are required.");
      setSuccess("");
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setSuccess("");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
    } else {
      setError("");
      try {
        const response = await resetPassword(token, password);
        if (response.success) {
          setSuccess("Your password has been reset successfully!");
          setError("");
        } else {
          setError(response.message || "An error occurred while resetting the password.");
          setSuccess("");
        }
      } catch (err) {
        setError("Failed to reset password. Please try again later.");
        setSuccess("");
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Reset Password</h2>
      <p className="text-sm text-gray-600 text-center mt-2">
        Enter and confirm your new password.
      </p>
      <div className="mt-4">
        <input
          type="password"
          className={`w-full px-4 py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <input
          type="password"
          className={`w-full px-4 py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
      <button
        onClick={handleSubmit}
        className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
