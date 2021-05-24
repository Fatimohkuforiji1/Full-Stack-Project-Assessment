import React from 'react'


const AddVideoSearch = (props) => {
    return (
      <div>
        Search
        <input
          onChange={props.handleVideoSearch}
          type="text"
          placeholder="Search..."
        ></input>
      </div>
    );
}

export default AddVideoSearch
