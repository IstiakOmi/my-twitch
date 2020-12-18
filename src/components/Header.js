import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c540.png"
          alt=""
          className="header__leftLogo"
        />

        <h2>Following</h2>
        <h2>Browse</h2>

        <div className="header__verticalLine"></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        <i className="fas fa-ellipsis-h"></i>
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        <div className="header__centerLogoContainer">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comment-alt"></i>

          <div className="header__rightBits">
            <i className="fas fa-gem"></i>
            <h6>Get Bits</h6>
          </div>
          <Avatar src="https://scontent.fdac69-1.fna.fbcdn.net/v/t1.0-9/124100250_2762371660705431_1584770125599255727_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=9Mr5uCpuvukAX_04XJL&_nc_ht=scontent.fdac69-1.fna&oh=ac726832983fdc64417a9137cf165b41&oe=5FE61469" />
        </div>
      </div>
    </div>
  );
};

export default Header;
