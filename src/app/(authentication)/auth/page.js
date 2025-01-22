"use client";
import React, { useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "../../_lib/sessionReducer";
import { useRouter } from "next/navigation";
import { googleOAuth, login, signUp } from "@/app/service/UserService";
import Link from "next/link";
import UserCartService from "@/app/service/UserCartService";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const userCartService=new UserCartService();
  const [success, setSuccess] = useState(null);
  const [loading,setLoading]=useState(false);
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({});
    setErrors({});
    setSuccess(null);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const syncUser = () => {
    const userData = localStorage.getItem("shopflow_session");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        dispatch(setSession(parsedData));
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  };

  const validate = () => {
    const validationErrors = {};
    const requiredFields = isLogin
      ? ["email", "password"]
      : ["email", "password", "confirmPassword", "username"];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        validationErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      } else if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field])) {
          validationErrors[field] = "Invalid email format";
        }
      } else if (field === "confirmPassword" && formData.password !== formData.confirmPassword) {
        validationErrors[field] = "Passwords do not match";
      }
    });

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(null); 
      return;
    }

    try {
      setErrors({}); 
      if (isLogin) {
        setLoading(true);
        await login(formData);
        syncUser();
        router.push("/");
      } else {
        setLoading(true);
        const response = await signUp(formData);
        // await userCartService.migrateCart(response?.data?.id);
        setSuccess(response?.message || "Registration successful! Please sign in.");
      }
      setLoading(false);
    } catch (error) {
       setLoading(false);
      setErrors({ form: error.message || "An unexpected error occurred. Please try again." });
      setSuccess(null); 
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn("google");
      await googleOAuth(session.user);
      
      syncUser();
      router.push("/");
    } catch (error) {
      console.error("Google login error:", error);
      setErrors({form: "An unexpected error occurred. Please try again." });
      setSuccess(null); // Clear success message if Google login fails
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      syncUser();
    }
  }, [status]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-between mb-6">
          <button
            className={`flex-1 text-center py-2 font-semibold ${isLogin ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"}`}
            onClick={() => setIsLogin(true)}
          >
            SIGN IN
          </button>
          <button
            className={`flex-1 text-center py-2 font-semibold ${!isLogin ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"}`}
            onClick={() => setIsLogin(false)}
          >
            REGISTER
          </button>
        </div>

        {/* Error Display */}
        {errors.form && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {errors.form}
          </div>
        )}

        {/* Success Display */}
        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username || ""}
                onChange={(e) => handleChange("username", e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password || ""}
              onChange={(e) => handleChange("password", e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>
          
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword || ""}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>
          )}

          <button
            type="submit"
            className="w-full mb-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg hover:from-orange-600 hover:to-red-600"
          >
           {loading ? "loading" : (isLogin ? "Sign in" : "Register")}

          </button>
        </form>

        {isLogin && (
          <div className="mt-4">
            <Link href="user/forgetpwd" className="text-sm text-gray-500 hover:text-orange-500">
              Forgot your password?
            </Link>
          </div>
        )}

        <div className="flex flex-col items-center w-full">
          <div className="text-gray-400 mt-1">Quick Access With</div>
          <button
            className="flex flex-row justify-center mt-2"
            onClick={handleGoogleLogin}
          >
            <FaGoogle size={24} color="#FFC107" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
