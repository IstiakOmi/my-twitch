import React from "react";
import "./Profile.css";
import RecentItem from "./RecentItem";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__topLeft">
          <img
            src="https://scontent.fdac69-1.fna.fbcdn.net/v/t1.0-9/124100250_2762371660705431_1584770125599255727_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=9Mr5uCpuvukAX8r89Fh&_nc_ht=scontent.fdac69-1.fna&oh=ccdfe3a75f0a723d9380f56f7c4530d5&oe=5FE61469"
            alt=""
            className="image"
          />
          <div className="profile__topLeft--Details">
            <h1>istiakomi</h1>
            <h3>20k followers</h3>
          </div>
        </div>
        <div className="profile__topRight">
          <i className="fas fa-heart graybg"></i>
          <i className="fas fa-bell graybg"></i>
          <i className="fas fa-ellipsis-v "></i>
        </div>
      </div>

      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent Broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItem
            url={"https://www.youtube.com/embed/HyOYNHRmMms"}
            title={"Explore MyHulu, build with React JS, Firebase"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/M58dJBDdBh8"}
            title={"Explore My Airbnb Clone,  with React JS "}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/Juy1rGhQGz8"}
            title={"Explore Meeewitter, build with React JS, Firebase"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/7B8L8VhVXIw"}
            title={
              "Explore Covid 19 Tracker by Istiak,  build with React JS, Firebase, API Integration"
            }
          />
        </div>
        <div className="profile__categories">
          <h2>istiakomi's Latest Work Categories</h2>
          <img src="https://sjorshooijen.io/wp-content/uploads/2016/12/sjorshooijen-firebase.jpg" />
          <h3>Computer Science & Technology</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
