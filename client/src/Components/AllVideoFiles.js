import React, { useState } from "react";
import AddVideo from "./AddVideo";
import AllVideosData from "../Data/AllVideosData.js";
import VideoGrid from "./VideoGrid.js";
import AddVideoSearch from "./AddVideoSearch";

const AllVideoFiles = () => {
  const [videoSearch, setVideoSearch] = useState(AllVideosData);
  // const [videoDelete, setVideoDelete] = useState(AllVideosData);

  const handleVideoSearch = (event) => {
    const searchVideo = event.target.value.toLowerCase();
    const searchFiltered = [];
    AllVideosData.filter((obj) => {
      if (obj.title.toLowerCase().includes(searchVideo)) {
        searchFiltered.push(obj);
      }
    });
    console.log(searchFiltered);
    setVideoSearch(searchFiltered);
  };
  const handleAddVideo = (event) => {
    const videoAdd = event.target.textContent;
    const videoCheck =
      event.currentTarget.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0];
    console.log(videoCheck);
    console.log(videoAdd);
    if (videoAdd === "Add Video") {
      if (
        event.currentTarget.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0].classList.contains(
          "addVideoDisplay"
        )
      ) {
        event.currentTarget.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0].classList.remove(
          "addVideoDisplay"
        );
      }
    } else {
      event.currentTarget.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0].classList.add(
        "addVideoDisplay"
      );
    }
    if (videoAdd === "Add") {
      const addNewTitle = event.currentTarget.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].value;
      const addNewUrl = event.currentTarget.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[3].value;
      const newVideos=[];
      const oneNewVideo = {
        "title" : "addNewTitle",
        "url" :"addNewUrl"
      }
      newVideos.push(oneNewVideo)
      setVideoSearch([...newVideos, ...videoSearch])
    }
  
  };

  const handleVideoDelete = (event) => {
    const deleteVideo =
      event.currentTarget.parentNode.parentNode.childNodes[0].textContent;
    console.log(deleteVideo);
    const deleteFiltered = videoSearch.filter((obj) => {
      if (!(obj.title === deleteVideo)) {
        return obj;
      }
    });
    setVideoSearch(deleteFiltered);
  };

  return (
    <div>
      <AddVideo
        const
        handleAddVideo={handleAddVideo}
        handleVideoSearch={handleVideoSearch}
      />
      <VideoGrid
        AllVideosData={videoSearch}
        handleVideoDelete={handleVideoDelete}
      />
    </div>
  );
};

export default AllVideoFiles;
