import React from "react";
import "../style/pagenavigation.css";

export default function PageNavigation(props) {
  function decrement() {
    props.setCurrentPage(props.currentPage - 1);
  }
  function increment() {
    props.setCurrentPage(props.currentPage + 1);
  }
  return (
    <div className="pagination">

      <div
        className="prev"
        onClick={decrement}
        style={
          props.currentPage === 1
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        <i className="fa-solid fa-angle-left"></i>
      </div>

      <div className="pg-1" onClick={decrement}>
        {props.currentPage === 1 ? "" : props.currentPage - 1}
      </div>

      <div className="pg">{props.currentPage}</div>

      <div className="pg+1" onClick={increment}>
        {props.currentPage === props.totalPages ? "" : props.currentPage + 1}
      </div>
      <div
        className="next"
        onClick={increment}
        style={
          props.currentPage !== props.totalPages
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}
