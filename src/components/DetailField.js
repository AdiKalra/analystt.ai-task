import React from "react";

export default function DetailField(props){
	return(
		<div className="flex-col">
			<span className="bold">{props.tag}</span>
			<span className="info">{props.value}</span>
		</div>
	)
}