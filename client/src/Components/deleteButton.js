import React from 'react'


const DeleteButton = (props) => {
    return (
      <div>
        <button onClick={props.handleVideoDelete}>Delete</button>
      </div>
    );
}

export default DeleteButton

