import React, { useState } from "react";
import AddVideoSearch from "./AddVideoSearch";
import VideoButton from "./videoButton.js";

const AddVideo = (props) => {
  const [hidden, setHidden] = useState(true);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
 

  const showHideForm = (event) => {
    event.preventDefault();
    const caption = event.target.textContent;
    console.log(caption);

    if (caption === "Add Video") {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  const collectVideoData = (event) => {
    event.preventDefault();
    const videoData = { title: videoTitle, url: videoURL };
    props.handleAddVideo(videoData);
    setVideoTitle("");
    setVideoURL("");
  };

  return (
    <div>
      {/* </div><div className="addVideo "> */}
      <form>
        {hidden ? (
          <button onClick={showHideForm}>Add Video</button>
        ) : (
          <div className=" addVideoDisplay ">
            <p>Add Video</p>
            <div>
              Title
              <input
                type="text"
                value={videoTitle}
                onChange={(event) => {
                  setVideoTitle(event.target.value);
                }}
              />
              URL
              <input
                type="text"
                value={videoURL}
                onChange={(event) => {
                  setVideoURL(event.target.value);
                }}
              />
            </div>
            <div>
              <button onClick={showHideForm}>Cancel</button>
              <button onClick={collectVideoData}>Add</button>
            </div>
          </div>
        )}
        {/* </div> */}
      </form>
      {/* </div> */}
      <AddVideoSearch handleVideoSearch={props.handleVideoSearch} />
      <VideoButton videoBtn={props.videoBtn} handleVideoBtn={props.handleVideoBtn} />
    </div>
  );
};

export default AddVideo;
