import React from 'react'
import "./StylesComponent.css";

const StylesComponent = () => {
   const flag = true;
   const twoStyle = {

    color: flag ?  "green": "yellow",
    background: "grey"
   };

  return (
    <>
       <div style={{color:"red", background: "black"}}>one</div>
       <div style={twoStyle}>two</div>
       <div style={{color: flag? "blue": "pink", marginTop: 15}}>three</div>
        
       <div className="pointer">four</div>
       <div className="pink">5</div>
    </>
  )
}

export default StylesComponent