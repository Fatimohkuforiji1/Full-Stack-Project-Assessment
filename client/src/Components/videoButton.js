import React from "react";

const VideoButton = (props) => {
  return (
    <div>
      <button onClick={props.handleVideoBtn}>{props.videoBtn}</button>
    </div>
  );
};

export default VideoButton;
