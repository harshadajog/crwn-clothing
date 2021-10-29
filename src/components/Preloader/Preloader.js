import React from "react";
import './Preloader.style.scss';
function Preloader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Preloader;