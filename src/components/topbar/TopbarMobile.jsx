import "./topbar.css";
import {  Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function TopbarMobile() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">EchoChats</span>
        </Link>
      </div>

      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="profile">
          <img src="/assets/person/2.jpeg" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}
