"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login submitted", { email, password });
    }, 1500);
  };

  return (
    <div className="w-full min-h-[500px] flex items-center justify-center p-4 relative overflow-hidden rounded-3xl">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-[80px]"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[90px]"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md bg-black/50 backdrop-blur-2xl rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/10 relative z-10"
      >
        {/* Dynamic top gradient line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-green-500 to-transparent opacity-70"></div>

        <div className="text-center mb-10 mt-2">
          <h2 className="text-3xl font-extrabold text-white mb-2 tracking-wide">
            Egypt
            <span className="text-primary-500 ">Xplore</span>
          </h2>
          <p className="text-gray-400 text-sm font-light tracking-wide">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="w-full">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  className="text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-sm text-center mb-2 shadow-inner"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-2 w-full">
            <label className="text-[11px] font-bold text-gray-400 ml-1 tracking-widest uppercase">
              Email
            </label>
            <div className="relative group  flex items-center justify-center">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-emerald-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 hover:bg-white/10 transition-all duration-300 shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-2 w-full relative">
            <div className="flex justify-between items-center mb-1">
              <label className="text-[11px] font-bold text-gray-400 ml-1 tracking-widest uppercase">
                Password
              </label>
              <Link
                href="#"
                className="text-[11px] font-medium text-primary-500 tracking-wide underline-offset-4 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="relative group flex items-center justify-center">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-emerald-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-6 bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 hover:bg-white/10 transition-all duration-300 shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-500 hover:text-white transition-colors focus:outline-none"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{
              scale: 1.01,
              boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-2xl shadow-[0_4px_15px_rgba(16,185,129,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4 group"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
            <span className="relative tracking-wide">
              {isLoading ? "Validating..." : "Login to Account"}
            </span>
          </motion.button>
        </form>

        <div className="mt-8 flex items-center justify-between">
          <span className="w-1/4 border-b border-gray-600/30"></span>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest px-2">
            Or continue with
          </span>
          <span className="w-1/4 border-b border-gray-600/30"></span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all shadow-sm cursor-not-allowed"
          >
            <FontAwesomeIcon
              icon={faGoogle}
              className="text-gray-300 text-lg"
            />
            <span className="text-sm text-gray-300 font-semibold tracking-wide">
              Google
            </span>
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 transition-all shadow-sm cursor-not-allowed group"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-gray-300 text-lg group-hover:text-[#1877F2] transition-colors"
            />
            <span className="text-sm text-gray-300 font-semibold tracking-wide group-hover:text-white transition-colors">
              Facebook
            </span>
          </motion.button>
        </div>

        <div className="mt-8 text-center border-t border-white/10 pt-6">
          <p className="text-gray-400 text-sm font-light">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors hover:underline underline-offset-4"
            >
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
