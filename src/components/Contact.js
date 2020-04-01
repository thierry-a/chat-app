import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

const Contact = (props) => {
    const { avatar, name, online } = props;
    return ( 
        <div className="Contact">
            <img className="avatar" src={avatar} alt="avatar" />
            <div>
                <p className="name">{name}</p>
                <div className="status">
                    <div className={online ? "status-online" : "status-offline"} />
                    <p className="status-text">{online ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };  

export default Contact;
