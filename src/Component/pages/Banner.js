import React from 'react';

const styles = {
  width:"100%",
  height:"50px",
  background: "#8CC63F",
  fontFamily : "karla",
  color: "white",
  textAlign : "center",
  marginTop:"4.5em",
  lineHeight: "50px"
}

const Banner = (props) => {
  return(
    <div style={styles}>
      <h3>{props.title}</h3>
    </div>
  )
}

export default Banner;