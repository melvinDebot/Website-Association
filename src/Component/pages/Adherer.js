import React from 'react';

const styles = {
  width : "100%",
  height: "500vh",
  backgroundColor: "puprle",
  color : "red",


}

class Adherer extends React.Component{
  render(){
    return(
      <div style={styles}>
        <h1>S'adhérer Page</h1>
      </div>
    )
  }
}

export default Adherer ;