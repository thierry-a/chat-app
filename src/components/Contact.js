import React from 'react';
import './Contact.css';

const name = "Emiliano Zapata";
const avatar = "https://randomuser.me/api/portraits/lego/6.jpg";
const online = true;

const Contact = () => (

    <div className="Contact">
    <img className="avatar" alt="avatar" src={avatar}></img>

    <div>
      <h4 className="name">{name}</h4>
      <div className="status">
        <div className={online ? "status-online" : "status-offline"}></div>
        <span className="status-text">{online ? "Online" : "Offline"}</span>
      </div>
    </div>
  </div>

);
export default Contact;