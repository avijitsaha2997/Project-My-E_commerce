import ComputerIcon from "@mui/icons-material/Computer";
import HeadsetIcon from "@mui/icons-material/Headset";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIphoneSharpIcon from "@mui/icons-material/PhoneIphoneSharp";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
        <Link to="/">
          <HomeIcon className="sidebar__icons"/>
        </Link>

        <Link to="/headset">
          <HeadsetIcon className="sidebar__icons"/>
        </Link>

        <Link to="/mobile">
           <PhoneIphoneSharpIcon className="sidebar__icons"/>
        </Link>

        <Link to="/computer">
          <ComputerIcon className="sidebar__icons"/>
        </Link>

    </div>
  );
}

export default Sidebar;
