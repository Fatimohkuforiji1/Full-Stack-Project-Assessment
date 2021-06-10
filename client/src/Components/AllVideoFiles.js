import React, { useState, useEffect } from "react";
import AddVideo from "./AddVideo";
import AllVideosData from "../Data/AllVideosData.js";
import VideoGrid from "./VideoGrid.js";

const AllVideoFiles = () => {
  const [videoSearch, setVideoSearch] = useState([]);
  const [videoBtn, setVideoBtn] = useState("Ascending");

  const handleVideoBtn = (event) => {
    const btnVideo = event.target.innerText;
    const holdVideoSearch = videoSearch;

    if (btnVideo === "Ascending") {
      setVideoBtn("Descending");
      setVideoSearch(
        holdVideoSearch.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          } else {
            return 1;
          }
        })
      );
    } else {
      setVideoBtn("Ascending");
      setVideoSearch(
        holdVideoSearch.sort((a, b) => {
          if (a.rating > b.rating) {
            return 1;
          } else {
            return -1;
          }
        })
      );
    }
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideoSearch(data);
      })
      .catch((error) => alert("Refresh The page, something went wrong"));
  }, []);

  // useEffect (()=>{
  //   fetch("http://127.0.0.1:5000/")
  //     .then((response) => {
  //       response.json();
  //     })
  //     .then((data) => {

  //       setVideoSearch(data);
  //     }).catch((error) => {
  //       console.log(error);
  //     });

  // }, [])

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

  // const handleAddVideo = (videoData) => {
  //   const URLValidate =
  //     /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9_-]+)/;
  //   if (
  //     videoData.title.trim().length !== 0 &&
  //     videoData.url.match(URLValidate)
  //   ) {
  //     setVideoSearch([videoData, ...videoSearch]);
  //   } else {
  //     alert("Enter valid URL");
  //   }
  // };

  const handleVideoDelete = (event) => {
    const deleteVideo =
      event.currentTarget.parentNode.parentNode.childNodes[0].textContent;
    console.log(deleteVideo);
    const deleteFiltered = [];
    videoSearch.filter((obj) => {
      if (!(obj.title === deleteVideo)) {
        deleteFiltered.push(obj);
      }
    });
    setVideoSearch(deleteFiltered);
  };

  return (
    <div>
      <AddVideo
        handleVideoSearch={handleVideoSearch}
        videoBtn={videoBtn}
        handleVideoBtn={handleVideoBtn}
        setVideoSearch={setVideoSearch}
        videoSearch={videoSearch}
      />
      <VideoGrid
        AllVideosData={videoSearch}
        handleVideoDelete={handleVideoDelete}
      />
    </div>
  );
};

export default AllVideoFiles;
