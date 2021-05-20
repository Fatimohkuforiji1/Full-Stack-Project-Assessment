import React from 'react'
import AllVideosData from "../Data/AllVideosData.js"


const VideoGrid = (props) => {
    const iFramesUrl = AllVideosData.map((iFrameUrl) => {
      let iFramesId = iFrameUrl.url.split("=")[1];
    });
    return (
        <div className ="videoGrid">
        {props.AllVideosData.map((AllVideo)=>{
            return (<div> 
                <h5>{AllVideo.title}</h5>                
                 <iframe> </iframe>
             </div>)
             

        })}
        </div>
    )
}

export default VideoGrid
