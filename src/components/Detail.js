import React from "react";
export default function Detail(props) {
  return (
    <div className={`detailed-info card${props.userObj.id}`}>
      <h3>Detailed Information</h3>
      <div className="detail--container">
        <div className="contact-info flex-col">
          <span className="bold">Contact Person</span>
          <span className="info">{props.userObj.name}</span>
          <span className="bold">Company</span>
          <span className="info">{props.userObj.company.name}</span>
          <span className="bold">Email</span>
          <span className="info">{props.userObj.email}</span>
          <span className="bold">Phone</span>
          <span className="info">{props.userObj.phone}</span>
        </div>
        <div className="address-details flex-col">
          <span className="bold">Address</span>
          <span className="info">{`${props.userObj.address.suite} ${props.userObj.address.street} ${props.userObj.address.city} ${props.userObj.address.zipcode}`}</span>
          <span className="bold">Street</span>
          <span className="info">{props.userObj.address.street}</span>
          <span className="bold">City</span>
          <span className="info">{props.userObj.address.city}</span>
          <span className="bold">Geoloaction</span>
          <span className="info">{`Latitude: ${props.userObj.address.geo.lat} Longitude: ${props.userObj.address.geo.lng}`}</span>
        </div>
      </div>
    </div>
  );
}
