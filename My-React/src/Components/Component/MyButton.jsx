import React from "react";

function MyButton(props) {
  return (
    <>
      <button className={props.className} onClick={props.onClick} id={props.id}>
        {props.name}
      </button>
    </>
  );
}
export default MyButton;
