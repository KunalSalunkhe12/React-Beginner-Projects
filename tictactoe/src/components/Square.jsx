import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        borderWidth: '0 0 4px 4px' ,
        borderStyle: 'solid',
        borderColor: '#000',
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square"
    >
      <h3>{props.value}</h3>
    </div>
  );
};

export default Square;
