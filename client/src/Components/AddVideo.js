import React, { useState } from "react";
import AddVideoSearch from "./AddVideoSearch";
import VideoButton from "./videoButton.js";


//  fetch("http://127.0.0.1:5000")
//    .then((response) => response.json())
//    .then((data) => {
//      console.log(data);
//      setVideoSearch(data);
//    })
//    .catch((error) => alert("Refresh The page, something went wrong"));

const AddVideo = (props) => {
  const [hidden, setHidden] = useState(true);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
 
const handleAddVideo = (videoData) => {
  const URLValidate =
    /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9_-]+)/;
  if (videoData.title.trim().length !== 0 && videoData.url.match(URLValidate)) {
    props.setVideoSearch([videoData, ...props.videoSearch]);

    // .then((response) => response.json())
  }
  // else {
  //   alert("Enter valid URL");
  // }
}
  // modified: src / Components / AddVideo.js;
  // modified: src / Components / AllVideoFiles.js;
  // modified: src / Components / VideoGrid.js;
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

  const rating = 0;
  const collectVideoData = (event) => {
    event.preventDefault();
    const videoData = { title: videoTitle, url: videoURL, rating: rating };
   
    handleAddVideo(videoData);
    setVideoTitle("");
    setVideoURL("");

    fetch("http://127.0.0.1:5000", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(videoData),
    });

    console.log(videoData);
  };

  return (
    <div>
      <form>
      <h4>Hello</h4>
        { hidden ? 
        ( <button onClick={showHideForm}>Add Video</button>
        ) :(
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
      
      </form>
      <AddVideoSearch handleVideoSearch={props.handleVideoSearch} />
      <VideoButton videoBtn={props.videoBtn} handleVideoBtn={props.handleVideoBtn} />
    </div>
  );
};

export default AddVideo;
