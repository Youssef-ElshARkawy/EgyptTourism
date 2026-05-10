"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowRightFromBracket,
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
  faUserPlus,
  faX,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/images/Logo1.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  
  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="bg-black/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] z-40 transition-all duration-300 border-b border-white/10 sticky top-0"
      >
        <div className="container mx-auto px-4">
          {/* {main navbar} */}
          <div className="py-3 flex justify-between items-center">
            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMenu}
                className="text-white hover:text-green-400 transition-colors p-2"
              >
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Site Logo"
                  className="w-32 md:w-40 hover:opacity-80 transition-opacity duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
              </Link>
            </div>

            {/* Desktop Search */}
            <div className="relative hidden lg:block group flex-1 max-w-xl mx-8">
              <input
                type="text"
                placeholder="Search for destinations, tours..."
                className="w-full border border-white/10 bg-white/5 rounded-full px-5 py-2.5 text-sm tracking-wide text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 focus:bg-white/10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] transition-all duration-300"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="w-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 group-focus-within:text-green-400 transition-colors duration-300"
              />
            </div>

            {/* Desktop Links */}
            <div className="justify-center items-center gap-7 hidden lg:flex text-gray-300 text-sm tracking-wider font-medium">
              <div className="group cursor-pointer">
                <Link
                  href="/wishlist"
                  className={`${pathname === "/wishlist" ? "text-green-400" : "hover:text-green-400"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full ${pathname === "/wishlist" ? "after:w-full" : ""}`}
                >
                  <FontAwesomeIcon icon={faHeart} className="w-5" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Wishlist</span>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link
                  href="/cart"
                  className={`${pathname === "/cart" ? "text-green-400" : "hover:text-green-400"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full ${pathname === "/cart" ? "after:w-full" : ""}`}
                >
                  <div className="relative">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-5" />
                    <span className="absolute -top-2.5 -right-3 bg-green-500 text-white rounded-full w-[18px] h-[18px] text-[10px] font-bold shadow-[0_0_10px_rgba(34,197,94,0.5)] flex justify-center items-center font-sans tracking-normal">
                      {"0"}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest">Cart</span>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link
                  href="/account"
                  className={`${pathname === "/account" ? "text-green-400" : "hover:text-green-400"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full ${pathname === "/account" ? "after:w-full" : ""}`}
                >
                  <FontAwesomeIcon icon={faUser} className="w-5" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Account</span>
                </Link>
              </div>

              <div className="group cursor-pointer">
                <div
                  className={`${pathname === "/logout" ? "text-green-400" : "hover:text-green-400"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="w-5"
                  />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Logout</span>
                </div>
              </div>

              <div className="group cursor-pointer">
                <Link
                  href="/signup"
                  className={`${pathname === "/signup" ? "text-green-400" : "hover:text-green-400"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full ${pathname === "/signup" ? "after:w-full" : ""}`}
                >
                  <FontAwesomeIcon icon={faUserPlus} className="w-5" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Signup</span>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link
                  href="/login"
                  className={`${pathname === "/login" ? "text-green-400" : "hover:text-green-400"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full ${pathname === "/login" ? "after:w-full" : ""}`}
                >
                  <FontAwesomeIcon icon={faAddressCard} className="w-5" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Login</span>
                </Link>
              </div>
            </div>

            {/* Mobile Cart Icon */}
            <div className="lg:hidden group cursor-pointer">
              <Link href="/cart" className="flex items-center text-white hover:text-green-400 transition-colors">
                <div className="relative">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                  <span className="absolute -top-2.5 -right-3 bg-green-500 text-white rounded-full w-[18px] h-[18px] text-[10px] font-bold shadow-[0_0_10px_rgba(34,197,94,0.5)] flex justify-center items-center font-sans tracking-normal">
                    {"0"}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/60 backdrop-blur-sm fixed inset-0 z-50"
              onClick={toggleMenu}
            ></motion.div>
            
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 bottom-0 left-0 min-w-[280px] w-[80vw] max-w-sm bg-gray-950/95 backdrop-blur-xl shadow-[10px_0_40px_rgba(0,0,0,0.5)] z-50 p-6 overflow-y-auto border-r border-white/10 flex flex-col"
            >
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <Image src={logo} alt="Site Logo" className="w-32 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                <div
                  className="w-10 h-10 bg-white/5 rounded-full flex justify-center items-center border border-white/10 hover:bg-green-500 hover:text-white hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300 cursor-pointer text-gray-400"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={faX} className="w-4 h-4" />
                </div>
              </div>

              <div className="py-6 space-y-6 flex-1">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search tours..."
                    className="w-full border border-white/10 bg-white/5 rounded-full px-5 py-3 text-sm tracking-wide text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all duration-300"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="w-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 group-focus-within:text-green-400 transition-colors duration-300"
                  />
                </div>

                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-green-500 mb-4 px-2">
                    Main Menu
                  </h2>
                  <div className="flex flex-col gap-2 text-sm font-medium tracking-wide">
                    <Link
                      href="/wishlist"
                      onClick={toggleMenu}
                      className={`${pathname === "/wishlist" ? "text-green-400 bg-green-500/10 border-green-500/20" : "text-gray-300 hover:text-green-400 hover:bg-white/5 border-transparent"} flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-300`}
                    >
                      <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
                      <span>Wishlist</span>
                    </Link>
                    <Link
                      href="/cart"
                      onClick={toggleMenu}
                      className={`${pathname === "/cart" ? "text-green-400 bg-green-500/10 border-green-500/20" : "text-gray-300 hover:text-green-400 hover:bg-white/5 border-transparent"} flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-300`}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4" />
                      <span>Cart</span>
                    </Link>
                    <Link
                      href="/account"
                      onClick={toggleMenu}
                      className={`${pathname === "/account" ? "text-green-400 bg-green-500/10 border-green-500/20" : "text-gray-300 hover:text-green-400 hover:bg-white/5 border-transparent"} flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-300`}
                    >
                      <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                      <span>Account</span>
                    </Link>
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-green-500 mb-4 px-2">
                    Account
                  </h2>
                  <div className="flex flex-col gap-2 text-sm font-medium tracking-wide">
                    <div
                      onClick={toggleMenu}
                      className={`${pathname === "/logout" ? "text-green-400 bg-green-500/10 border-green-500/20" : "text-gray-300 hover:text-green-400 hover:bg-white/5 border-transparent"} flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-300 cursor-pointer`}
                    >
                      <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-4 h-4" />
                      <span>Logout</span>
                    </div>
                    <Link
                      href="/signup"
                      onClick={toggleMenu}
                      className={`${pathname === "/signup" ? "text-green-400 bg-green-500/10 border-green-500/20" : "text-gray-300 hover:text-green-400 hover:bg-white/5 border-transparent"} flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-300`}
                    >
                      <FontAwesomeIcon icon={faUserPlus} className="w-4 h-4" />
                      <span>Sign up</span>
                    </Link>
                    <Link
                      href="/login"
                      onClick={toggleMenu}
                      className={`${pathname === "/login" ? "text-green-400 bg-green-500/10 border-green-500/20" : "text-gray-300 hover:text-green-400 hover:bg-white/5 border-transparent"} flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-300`}
                    >
                      <FontAwesomeIcon icon={faAddressCard} className="w-4 h-4" />
                      <span>Login</span>
                    </Link>
                  </div>
                </div>
              </div>
              
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
