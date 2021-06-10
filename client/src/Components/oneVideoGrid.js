import React, {useState, useEffect} from 'react'
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import DeleteButton from './deleteButton.js';


const OneVideoGrid = (props) => {
const  [countVote, setCountVote] = useState();

useEffect(() => {
  setCountVote(props.rating);
}, [props.rating]);


const handleCountVote =(event)=>{
  const voteCount = event.currentTarget;
  if(voteCount.className === "thumbsUp"){
    console.log(voteCount);
    setCountVote (countVote +1)
  } else {setCountVote(countVote -1)
  }
}
    return (
      <div className="oneVideoGrid">
        <h5>{props.title}</h5>
        <div className="Thumbs">
          <button className="thumbsUp" onClick={handleCountVote}>
            <FaRegThumbsUp />
          </button>
          <p>{countVote}Votes</p>
          <button className="thumbsDown" onClick={handleCountVote}>
            <FaRegThumbsDown />
          </button>
        </div>

        <iframe
          width="300"
          height="157"
          src={`https://www.youtube.com/embed/${props.iFramesId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <DeleteButton handleVideoDelete={props.handleVideoDelete} />
      </div>
    );
  }


export default OneVideoGrid;
