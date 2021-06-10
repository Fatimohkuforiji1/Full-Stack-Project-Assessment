const { response } = require("express");
const express = require("express");
const app = express();
// const videoData = require("./videoData.json");
app.use(express.json());
const cors = require("cors")
app.use(cors());
const { Pool} = require("pg");
const port = process.env.PORT || 5000;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "Umm Muhammad",
  password: "akande1",
  database: "fatimoh_videos",
});


// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videos = [];

const videoSelectQuery = `SELECT * FROM videos`;


// GET "/"
app.get("/", (req, res) => {

  pool.query(videoSelectQuery)
      .then((result)=>{
        res.send(result.rows)
      })
});
//POST//
app.post("/", (req, res) => {
  let id = 1;
  let rating = 0;
  const addVideo = req.body;
  console.log(addVideo);
//  ../client/src/Components/AddVideo.js
//         modified:   ../client/src/Components/AllVideoFiles.js
//         modified:   ../client/src/Components/VideoGrid.js

  // if (addVideo.hasOwnProperty("title") || addVideo.hasOwnProperty("url")) {
  //   const oneNewVideo = {
  //     id: id++,
  //     title: addVideo.title,
  //     url: addVideo.url,
  //     rating: rating,
  //   };
  //   videoData.push(oneNewVideo);
  //   res.json({
  //     id: oneNewVideo.id,
  //   });
  // } else {
  //   response.json({
  //     result: "failure",
  //     message: "Video could not be saved",
  //   });
  // }
});

app.get("/:id", (req, res) => {
  const videoId = req.params.id;
  const findID = videoData.find((obj) => {
    if (obj.id === parseInt(videoId)) {
      return obj;
    }
  });
  res.json(findID);
});

const videoDeleteQuery = `DELETE `; 
//Delete
app.delete("/:id", (req, res) => {

  const videoId = req.params.id;
  const findID = videoData.findIndex((obj) => {
    if (obj.id === parseInt(videoId)) {
      return obj;
    }
  });
    if (findID === -1) {
      res.status(400).send(error);
    } else {
      videoData.splice(findID, 1);
      res.send("Deleted succesfully");
    }
 
});


app.listen(port, () => console.log(`Listening on port ${port}`));


// ../client/package-lock.json
//         modified:   ../client/package.json
//         modified:   ../client/src/App.css
//         modified:   ../client/src/Components/AddVideo.js
//         modified:   ../client/src/Components/AllVideoFiles.js
//         modified:   ../client/src/Components/oneVideoGrid.js
//           modified:   package-lock.json
//         modified:   package.json
//         modified:   server.js
//          ../client/src/Components/videoButton.js
//            videoData.json
//         videoData.sql