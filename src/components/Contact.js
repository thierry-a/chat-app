import React from 'react';
import './Contact.css';

const name = "Emiliano Zapata";
const avatar = "https://randomuser.me/api/portraits/lego/6.jpg";
const online = true;

const Contact = () => (
    <div className="Contact">
        <img className="avatar" src={avatar} alt="avatar"></img>
        <div>
            <p className="name">{name}</p>
            <div className="status">
                <div className={online ? "status-online" : "status-offline"} />
                <p className="status-text">{online ? "Online" : "Offline"}</p>
            </div>
        </div>
    </div>
);
export default Contact;