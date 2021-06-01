import React from 'react'
import AllVideosData from '../Data/AllVideosData.js';
import OneVideoGrid from './oneVideoGrid.js'


const VideoGrid = (props) => {

     function sorter(videos) {
       videos.sort((a, b) => {
         if (a.rating > b.rating) {
           return -1;
         } else {
           return 1;
         }
       });
     }

    return (
        <div className ="videoGrid">
        {sorter(AllVideosData)}
        {props.AllVideosData.map((AllVideo, index)=>{
            const iFramesId = AllVideo.url.split("=")[1]
            const title = AllVideo.title;
            const rating = AllVideo.rating;
            return  (
                <div key={index}>
              <OneVideoGrid iFramesId = {iFramesId} title = {title} rating={rating}
               handleVideoDelete ={props.handleVideoDelete}/>
                </div> )

                
})}
      </div>
      
)}

export default VideoGrid
