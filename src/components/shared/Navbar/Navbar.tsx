"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowRightFromBracket,
  faBars,
  faChevronDown,
  faEnvelope,
  faHeart,
  faList,
  faPhone,
  faSearch,
  faShoppingCart,
  faUser,
  faUserPlus,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/images/Logo1.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { AppState, useAppSelector } from "../../store/store";
// import useLogout from "@/src/features/auth/hooks/useLogout";

export default function Navbar() {
  // const { logout } = useLogout()
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  // const { numOfCartItems } = useAppSelector((state: AppState) => state.cart)
  // const { isAuthenticated } = useSelector((appState: AppState) => appState.auth);
  return (
    <>
      <header className="bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]  z-20 transition-all duration-300 border-b border-gray-100">
        <div className="container mx-auto">
          {/* {top navbar} */}
          <div className="py-2 hidden lg:block border-b border-gray-100/50">
            <div className="flex py-1.5 justify-between text-gray-500 text-xs">
              <div className="flex justify-center items-center gap-6">
                <a
                  href="tel:123456789"
                  className="flex gap-2 items-center hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faPhone} className="w-3" />
                  <span>123456789</span>
                </a>

                <a
                  href="mailto:omar@gmail.com"
                  className="flex gap-2 items-center hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-3" />
                  <span>omar@gmail.com</span>
                </a>
              </div>
              <div>
                <ul className="flex justify-center items-center gap-6 font-medium">
                  <li>
                    <Link
                      href="/orders"
                      className="hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      Track Order
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/About"
                      className="hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      About
                    </Link>
                  </li>
                  {/* Kept original spelling 'Contac' as requested */}
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      Contac
                    </Link>
                  </li>
                  <li>
                    <select
                      name=""
                      id=""
                      className="bg-transparent focus:outline-none cursor-pointer hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      <option value="EGP">EGP</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </li>
                  <li className="relative">
                    <select
                      name=""
                      id=""
                      className="bg-transparent focus:outline-none cursor-pointer appearance-none pr-4 hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      <option value="ar">عربي</option>
                      <option value="en">English</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
                      <FontAwesomeIcon icon={faChevronDown} className="w-2.5" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* {main navbar} */}
          <div className="py-2 flex justify-between items-center">
            <div>
              <Image
                src={logo}
                alt="Site Logo"
                className="w-40 hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div className="relative hidden lg:block group">
              <input
                type="text"
                placeholder="Search for Products ..."
                className="w-120 border border-gray-200 bg-gray-50 rounded-full px-5 py-2.5 text-sm tracking-wide focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="w-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 group-focus-within:text-[#D4AF37] transition-colors duration-300"
              />
            </div>
            <div className="justify-center items-center gap-7 hidden lg:flex text-gray-600 text-sm tracking-wider font-medium">
              <div className="group cursor-pointer">
                <Link
                  href="/wishlist"
                  className={`${pathname === "/wishlist" ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full ${pathname === "/wishlist" ? "after:w-full" : ""}`}
                >
                  <FontAwesomeIcon icon={faHeart} className="w-5" />
                  <span className="text-xs uppercase">Wishlist</span>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link
                  href="/cart"
                  className={`${pathname === "/cart" ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full ${pathname === "/cart" ? "after:w-full" : ""}`}
                >
                  <div className="relative">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-5" />
                    <span className="absolute -top-2.5 -right-3 bg-[#D4AF37] text-white rounded-full w-[18px] h-[18px] text-[10px] font-bold shadow-sm flex justify-center items-center font-sans tracking-normal">
                      {"0"}
                    </span>
                  </div>
                  <span className="text-xs uppercase">Cart</span>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link
                  href="/account"
                  className={`${pathname === "/account" ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full ${pathname === "/account" ? "after:w-full" : ""}`}
                >
                  <FontAwesomeIcon icon={faUser} className="w-5" />
                  <span className="text-xs uppercase">Account</span>
                </Link>
              </div>

              <div className="group cursor-pointer">
                <div
                  className={`${pathname === "/logout" ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full`}
                >
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="w-5"
                  />
                  <span className="text-xs uppercase">Logout</span>
                </div>
              </div>

              <div className="group cursor-pointer">
                <Link
                  href="/signup"
                  className={`${pathname === "/signup" ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full ${pathname === "/signup" ? "after:w-full" : ""}`}
                >
                  <FontAwesomeIcon icon={faUserPlus} className="w-5" />
                  <span className="text-xs uppercase">Signup</span>
                </Link>
              </div>
              <div className="group cursor-pointer">
                <Link
                  href="/login"
                  className={`${pathname === "/login" ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"} flex flex-col justify-center items-center gap-1.5 transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full ${pathname === "/login" ? "after:w-full" : ""}`}
                >
                  <FontAwesomeIcon icon={faAddressCard} className="w-5" />
                  <span className="text-xs uppercase">Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* {bottom navbar} */}

      {/*! { Media Query} */}

      {open && (
        <>
          <div
            className="layer bg-black/40 backdrop-blur-sm fixed inset-0 z-50 transition-opacity duration-300"
            onClick={toggleMenu}
          ></div>
          <div className="offcanvas animate-slide-in bg-white fixed top-0 bottom-0 min-w-70 w-80 shadow-[10px_0_40px_rgba(0,0,0,0.1)] z-60 p-5 overflow-y-auto *:border-b *:border-gray-100 *:py-4 first:pt-2">
            <div className="flex justify-between items-center !border-none pb-2">
              <Image src={logo} alt="Site Logo" className="w-36" />
              <div
                className="w-10 h-10 bg-gray-50 rounded-full flex justify-center items-center shadow-sm hover:!bg-[#D4AF37] hover:text-white transition-all duration-300 group cursor-pointer"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon
                  icon={faX}
                  className="text-gray-400 group-hover:text-white transition-colors duration-300"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search for Products ..."
                  className="w-full border border-gray-200 bg-gray-50 rounded-full px-5 py-2.5 text-sm tracking-wide focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="w-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 group-focus-within:text-[#D4AF37] transition-colors duration-300"
                />
              </div>

              <div className="pt-2 pb-1">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
                  Main Menu
                </h2>
                <div className="flex flex-col gap-1.5 text-sm font-medium tracking-wide">
                  <div className="transition-all duration-300 rounded-xl overflow-hidden">
                    <Link
                      href="/wishlist"
                      className={`${pathname === "/wishlist" ? "text-[#D4AF37] bg-[#D4AF37]/10" : "text-gray-600 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-1"} flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300`}
                    >
                      <FontAwesomeIcon icon={faHeart} className="w-4" />
                      <span>Wishlist</span>
                    </Link>
                  </div>
                  <div className="transition-all duration-300 rounded-xl overflow-hidden">
                    <Link
                      href="/cart"
                      className={`${pathname === "/cart" ? "text-[#D4AF37] bg-[#D4AF37]/10" : "text-gray-600 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-1"} flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300`}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className="w-4" />
                      <span>Cart</span>
                    </Link>
                  </div>
                  <div className="transition-all duration-300 rounded-xl overflow-hidden">
                    <Link
                      href="/account"
                      className={`${pathname === "/account" ? "text-[#D4AF37] bg-[#D4AF37]/10" : "text-gray-600 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-1"} flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300`}
                    >
                      <FontAwesomeIcon icon={faUser} className="w-4" />
                      <span>Account</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 pt-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
                Account
              </h2>

              <div className="transition-all duration-300 rounded-xl overflow-hidden cursor-pointer text-sm font-medium tracking-wide">
                <div
                  className={`${pathname === "/logout" ? "text-[#D4AF37] bg-[#D4AF37]/10" : "text-gray-600 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-1"} flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300`}
                >
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="w-4"
                  />
                  <span>Logout</span>
                </div>
              </div>

              <div className="transition-all duration-300 rounded-xl overflow-hidden text-sm font-medium tracking-wide">
                <Link
                  href="/signup"
                  className={`${pathname === "/signup" ? "text-[#D4AF37] bg-[#D4AF37]/10" : "text-gray-600 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-1"} flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300`}
                >
                  <FontAwesomeIcon icon={faUserPlus} className="w-4" />
                  <span>Sign up</span>
                </Link>
              </div>
              <div className="transition-all duration-300 rounded-xl overflow-hidden text-sm font-medium tracking-wide">
                <Link
                  href="/signin"
                  className={`${pathname === "/signin" ? "text-[#D4AF37] bg-[#D4AF37]/10" : "text-gray-600 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-1"} flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300`}
                >
                  <FontAwesomeIcon icon={faAddressCard} className="w-4" />
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
