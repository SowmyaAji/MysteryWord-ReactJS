import React from 'react';

const charComp = (props) => {
    let style = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "2px solid blue"

    }
    return(
      <div style={style}>
      {props.character}
      <button onClick={props.click}></button>
      </div>
    )
}

export default charComp;