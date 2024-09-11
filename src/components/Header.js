import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "./Constants";
import useOnline from "../hooks/useOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnTextReact, setBtnTextReact] = useState("Login");
  const onlineStatus = useOnline();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-violet-300 shadow-xl">
      <img src={LOGO_URL} className="w-32 m-4 rounded-md" />
      <ul className="flex items-center">
        <li className="p-8">Online: {onlineStatus ? "🟢" : "🔴"}</li>
        <li className="p-8 hover:bg-violet-400">
          <Link to="/">Home</Link>
        </li>
        <li className="p-8 hover:bg-violet-400">
          <Link to="/about">About</Link>
        </li>
        <li className="p-8 hover:bg-violet-400">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-8 hover:bg-violet-400">
          <Link to="/recepies">Recepies</Link>
        </li>
        <li>
          <button
            className="bg-slate-500 px-4 py-2 rounded-lg hover:bg-gray-50"
            onClick={() => {
              if (btnTextReact === "Login") {
                setBtnTextReact("Logout");
              } else {
                setBtnTextReact("Login");
              }
            }}>
            {btnTextReact}
          </button>
        </li>
        <li className="px-4">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
