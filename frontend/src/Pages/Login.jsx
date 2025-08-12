import { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Home/Loader";

const API_URL = import.meta.env.VITE_API_URL;

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showResetForm, setShowResetForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [resetEmail, setResetEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setFormData({ email: "", password: "", name: "" });
    setIsLogin(!isLogin);
    setShowResetForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
    localStorage.setItem("name", updatedForm.name);
    localStorage.setItem("email", updatedForm.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = isLogin ? `${API_URL}/auth/login` : `${API_URL}/auth/signup`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);
      console.log("Auth response:", data);

      if (!res.ok) {
        alert(data.message || "Something went wrong.");
        return;
      }

      if (isLogin) {
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Signup successful!");
        setIsLogin(true);
      }

      setFormData({ email: "", password: "", name: "" });
    } catch (err) {
      console.error("Auth Error ➤", err);
      setLoading(false);
      alert("Network error. Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    if (!resetEmail) return alert("Enter your email");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
      });

      const data = await res.json();
      setLoading(false);
      console.log("Reset response:", data);

      if (!res.ok) {
        alert(data.message || "Something went wrong.");
        return;
      }

      alert(data.message || "Password reset email sent.");
      setResetEmail("");
      setShowResetForm(false);
    } catch (err) {
      console.error("Forgot Password Error ➤", err);
      setLoading(false);
      alert("Network error. Please try again.");
    }
  };
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <div>
          <div className="h-screen w-full bg-gradient-to-br from-gray-900 to-violet-700 flex items-center justify-center px-4 py-10 text-white">
            <div className="max-w-xl w-full bg-white bg-opacity-5 backdrop-blur-lg rounded-lg shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">
                {showResetForm
                  ? "RESET PASSWORD"
                  : isLogin
                  ? "LOGIN HERE"
                  : "SIGNUP HERE"}
              </h2>

              {showResetForm ? (
                <div className="space-y-5">
                  <p className="text-gray-300">
                    Reset your password here, then log into your account.
                  </p>
                  <div className="relative">
                    <label className="block mb-1 text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none"
                      placeholder="Email"
                    />
                    <i className="fa fa-envelope absolute top-9 left-3 text-white"></i>
                  </div>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    disabled={loading}
                    className="w-full bg-violet-500 text-white py-2 rounded-md hover:bg-violet-400 transition duration-300"
                  >
                    {loading ? "Sending..." : "Send Reset Link"}
                  </button>

                  <div className="text-sm mt-4 text-center text-gray-300">
                    Remember your password?{" "}
                    <button
                      type="button"
                      onClick={() => setShowResetForm(false)}
                      className="text-violet-200 underline hover:text-white ml-1 transition"
                    >
                      Back to Login
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-gray-300">
                    {isLogin
                      ? "Welcome back! Log in to your account."
                      : "Create an account to get started."}
                  </p>

                  {!isLogin && (
                    <div className="relative">
                      <label className="block mb-1 text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none"
                        placeholder="Full Name"
                      />
                      <i className="fa fa-user absolute top-9 left-3 text-white"></i>
                    </div>
                  )}

                  <div className="relative">
                    <label className="block mb-1 text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none"
                      placeholder="Email"
                    />
                    <i className="fa fa-envelope absolute top-9 left-3 text-white"></i>
                  </div>

                  <div className="relative">
                    <label className="block mb-1 text-sm font-medium text-gray-300">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-10 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none"
                      placeholder="Password"
                    />
                    <i className="fa fa-lock absolute top-9 left-3 text-white"></i>
                    <i
                      className={`fa ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      } absolute top-9 right-3 text-white cursor-pointer`}
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-violet-500 text-white py-2 rounded-md hover:bg-violet-400 transition duration-300 flex items-center justify-center"
                  >
                    {loading && (
                      <svg
                        className="w-5 h-5 mr-2 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                    )}
                    {isLogin ? "Log In" : "Sign Up"}
                  </button>

                  {isLogin && (
                    <div className="text-sm text-right text-gray-300">
                      <button
                        type="button"
                        onClick={() => setShowResetForm(true)}
                        className="text-violet-200 underline hover:text-white transition"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  )}
                </form>
              )}

              {!showResetForm && (
                <div className="text-sm mt-4 text-center text-gray-300">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="text-violet-200 underline hover:text-white ml-1 transition"
                  >
                    {isLogin ? "Sign up" : "Log in"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
