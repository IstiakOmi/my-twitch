import React from "react";
import Channel from "./Channel";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
          name="IstiakOmi"
          followers="20k"
        />
        <Channel
          avatar="https://cdn.dribbble.com/users/5547197/screenshots/14248889/20200922_201013_4x.jpg"
          name="sajibpaul"
          followers="30k"
        />
        <h5>RECOMMENED CHANNELS</h5>
        <Channel
          avatar="https://www.kindpng.com/picc/m/105-1055561_gaming-logo-avatar-png-transparent-png.png"
          name="IstiakOmi"
          followers="20k"
        />

        <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to Add Friends" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
