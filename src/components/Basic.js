import React from "react";

export default function Basic(props) {
  const handleClick = () => {
    props.toggleButton(props.userObj.id)
	console.log(props.userObj.id);
  };
  return (
    <div className="basic-info flex-row">
      <div className="greet-text flex-col ">
      <span>{props.userObj.id}</span>
        <span>Hello {props.userObj.username}</span>
      </div>

      <div className="basic-contact flex-col">
        <span className="bold">CONTACT</span>
        <span>{props.userObj.name}</span>
      </div>

      <div className="basic-city flex-col">
        <span className="bold">STREET</span>
        <span>{props.userObj.address.street}</span>
      </div>

      <div className="basic-state flex-col">
        <span className="bold">CITY</span>
        <span>{props.userObj.address.city}</span>
      </div>

      <div className="toggle-button flex-row">
        <button onClick={handleClick}>
          View Details
        </button>
        
      </div>
    </div>
  );
}
