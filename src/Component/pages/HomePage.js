import React from 'react';

const styles = {
  width : "100%",
  height: "500vh",
  backgroundColor: "Green",
  color : "red",


}

class HomePage extends React.Component{
  render(){
    return(
      <div style={styles}>
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default HomePage ;