"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Example submission logic
    console.log("Form submitted successfully", formData);
  };

  const focusVariants = {
    focused: { 
      borderColor: "#22c55e", 
      boxShadow: "0 0 12px rgba(34, 197, 94, 0.3)",
      transition: { duration: 0.3 }
    },
    unfocused: { 
      borderColor: "rgba(255, 255, 255, 0.1)", 
      boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 overflow-hidden relative w-full">
      {/* Floating Background Animations */}
      <motion.div 
        className="absolute w-80 h-80 bg-green-500/20 rounded-full blur-[100px] pointer-events-none"
        animate={{
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ top: '15%', left: '15%' }}
      />
      <motion.div 
        className="absolute w-[400px] h-[400px] bg-green-800/20 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ bottom: '10%', right: '10%' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-white">Egypt</span>
            <span className="text-green-500">Xplore</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm font-medium">Create an account to discover</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-sm text-gray-300 font-medium ml-1">Full Name</label>
            <motion.div 
              variants={focusVariants}
              animate={focusedField === 'fullName' ? 'focused' : 'unfocused'}
              className="border rounded-xl bg-black/40 overflow-hidden"
            >
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField(null)}
                placeholder="John Doe"
                className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
              />
            </motion.div>
            <AnimatePresence>
              {errors.fullName && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-xs ml-1">{errors.fullName}</motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-sm text-gray-300 font-medium ml-1">Email</label>
            <motion.div 
              variants={focusVariants}
              animate={focusedField === 'email' ? 'focused' : 'unfocused'}
              className="border rounded-xl bg-black/40 overflow-hidden"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="you@example.com"
                className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
              />
            </motion.div>
            <AnimatePresence>
              {errors.email && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-xs ml-1">{errors.email}</motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-sm text-gray-300 font-medium ml-1">Password</label>
            <motion.div 
              variants={focusVariants}
              animate={focusedField === 'password' ? 'focused' : 'unfocused'}
              className="relative border rounded-xl bg-black/40 overflow-hidden"
            >
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                placeholder="••••••••"
                className="w-full bg-transparent pl-4 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                aria-label="Toggle password visibility"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </motion.div>
            <AnimatePresence>
              {errors.password && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-xs ml-1">{errors.password}</motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-sm text-gray-300 font-medium ml-1">Confirm Password</label>
            <motion.div 
              variants={focusVariants}
              animate={focusedField === 'confirmPassword' ? 'focused' : 'unfocused'}
              className="relative border rounded-xl bg-black/40 overflow-hidden"
            >
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => setFocusedField('confirmPassword')}
                onBlur={() => setFocusedField(null)}
                placeholder="••••••••"
                className="w-full bg-transparent pl-4 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={toggleConfirmPassword}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                aria-label="Toggle confirm password visibility"
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </button>
            </motion.div>
            <AnimatePresence>
              {errors.confirmPassword && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-xs ml-1">{errors.confirmPassword}</motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-2xl shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] transition-colors mt-6"
          >
            Sign Up
          </motion.button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 text-gray-400 backdrop-blur-xl bg-[#0a0a0a]/50 rounded-full text-xs font-medium uppercase tracking-wider">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full flex items-center justify-center gap-3 py-3 rounded-2xl border border-white/10 overflow-hidden transition-all bg-transparent"
            >
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <FontAwesomeIcon icon={faGoogle} className="text-white z-10" />
              <span className="text-white text-sm font-semibold z-10">Google</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full flex items-center justify-center gap-3 py-3 rounded-2xl border border-white/10 overflow-hidden transition-all bg-transparent"
            >
              <div className="absolute inset-0 bg-[#1877F2]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <FontAwesomeIcon icon={faFacebookF} className="text-[#1877F2] group-hover:text-white transition-colors z-10" />
              <span className="text-white text-sm font-semibold z-10">Facebook</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
