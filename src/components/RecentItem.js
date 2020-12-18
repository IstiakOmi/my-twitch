import React from "react";
import "./RecentItem.css";
const RecentItem = ({ url, title }) => {
  return (
    <div className="item">
      <iframe
        width="350"
        height="235"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="item__details">
        <img
          src="https://lh3.googleusercontent.com/proxy/UI-43rYhxbkraytBgtNqJMvAclFNVhNnB-omHmPAYAUbz6mMIQ1Rj1ggwVFq0oshXKNs4gvjeRl7CueIrU6TzZ0_j3D2Az5ImnXOcoJqtjDd"
          alt=""
          className="img"
        />
        <div className="item__detailsText">
          <h4>{title}</h4>
          <p>istiakomi</p>
          <p>Computer Science & Technology</p>
        </div>
      </div>
    </div>
  );
};

export default RecentItem;
