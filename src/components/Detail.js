import React from "react";
import DetailField from "./DetailField";
export default function Detail(props) {
  const address = `${props.userObj.address.suite} ${props.userObj.address.street} ${props.userObj.address.city} ${props.userObj.address.zipcode}`;
  return (
    <div className={`detailed-info card${props.userObj.id}`}>
      <h3>Detailed Information</h3>
      <div className="detail--container">
        <div className="contact-info flex-col">
          <DetailField tag="Contact Person" value={props.userObj.name} />
          <DetailField tag="Company" value={props.userObj.company.name} />
          <DetailField tag="Email" value={props.userObj.email} />
          <DetailField tag="Phone" value={props.userObj.phone} />
        </div>
        <div className="address-details flex-col">
          <DetailField tag="Address" value={address} />
          <DetailField tag="Street" value={props.userObj.address.street} />
          <DetailField tag="City" value={props.userObj.address.city} />
          <DetailField
            tag="Geoloaction"
            value={`Latitude: ${props.userObj.address.geo.lat} Longitude: ${props.userObj.address.geo.lng}`}
          />
        </div>
      </div>
    </div>
  );
}
