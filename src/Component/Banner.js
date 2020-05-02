import React from 'react';

const bannerStyle = {
  width : "100%",
  height:"65px",
  color:"white",
  fontSize : "35px",
  fontWeight : "bold",
  alingHeight:"65px",
  textAlign:"center",
  background:"#8CC63F",
  lineHeight : "55px"

}

const Banner = (props) => {
  return <div style={bannerStyle}>{props.title}</div>
}

export default Banner;