import React from "react";

class Background extends React.Component {
  render() {
    return (
      <div id="background">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster="background.jpg"
          id="background"
        >
          <source src="background.mp4" type="video/mp4" />
          <source src="background.webm" type="video/webm" />
        </video>
      </div>
    );
  }
}

export default Background;
