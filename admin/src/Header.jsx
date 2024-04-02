import { useContext, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
// import axios from "axios";
import { Link } from "react-router-dom";
import style from "./header.module.css";

import { AllData } from "./Component/Store/Store";

function Header() {
  const navRef = useRef();
  const { adminAuth, handleAuth, handleSelectedTab } = useContext(AllData);
  const handleLogout = () => {
    // axios
    //   .get("/logout")
    //   .then(() => {
    //     localStorage.clear();
    //     // window.location.href = "/";
    //     location.replace("/");
    //   })
    //   .catch((err) => console.log(err));
    handleAuth(false);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className={style.nav}>
      <div>
        <Link to="/">
          <div className={style.logo}>
            <h3>
              <img
                src="/Mainicon.png"
                className=" h-[200px] w-[250px] "
                alt="Main Icon"
              />
            </h3>
          </div>
        </Link>
      </div>
      <div className="flex justify-end mr-0">
        <nav ref={navRef}>
          {adminAuth && (
            <>
              <button
                className={`${style.btn} w-60`}
                onClick={() => {
                  handleSelectedTab("allRequest");
                }}
              >
                All varification request
              </button>
              <button
                className={`${style.btn} w-60`}
                onClick={() => {
                  handleSelectedTab("feedback");
                }}
              >
                Veiw all Feedback
              </button>
            </>
          )}
          {adminAuth && (
            <button className={style.btn} onClick={handleLogout}>
              Logout
            </button>
          )}

          {!adminAuth && (
            <Link to="login">
              <button className={`${style.btn} w-40`}>Login</button>
            </Link>
          )}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header;
