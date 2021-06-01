import React from 'react'
import AddVideoSearch from './AddVideoSearch';


const AddVideo = (props) => {
    return (
      <div>
        <div className="addVideo " onClick={props.handleAddVideo}>
          <form>
            <p>Add Video</p>
            <div className="title ">
              <div className="addVideoDisplay">
                <div>
                  Title
                  <input type="text" />
                  URL
                  <input type="text" />
                </div>
                <div>
                  <button>Cancel</button>
                  <button>Add</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <AddVideoSearch handleVideoSearch={props.handleVideoSearch} />
      </div>
    );
}

export default AddVideo
