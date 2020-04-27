import React from 'react';

const styles = {
  width : "100%",
  height: "500vh",
  backgroundColor: "black",
  color : "green",


}

class FaireUnDon extends React.Component{
  render(){
    return(
      <div style={styles}>
        <h1>Faire un don</h1>
      </div>
    )
  }
}

export default FaireUnDon;