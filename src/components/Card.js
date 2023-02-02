import React from "react";
import Basic from "./Basic";
import Detail from "./Detail";
import "../style/card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--container flex-col">
        <Basic userObj={props.userObj} toggleButton={props.toggleButton} />
        <Detail userObj={props.userObj} />
      </div>
    </div>
  );
}
