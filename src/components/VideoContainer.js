import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AddVideaoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      if (json.items && Array.isArray(json.items)) {
        setVideos(json.items);
      } else {
        setVideos([]);
        setError("No videos found in API response");
      }
    } catch (err) {
      console.error("Failed to fetch videos:", err);
      setError("Failed to fetch videos. Please try again later.");
      setVideos([]);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (videos.length === 0) {
    return <div>Loading videos...</div>;
  }

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AddVideaoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;








// import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEOS_API } from "../utils/constants";
// import VideoCard, { AddVideaoCard } from "./VideoCard";
// import { Link } from "react-router-dom";

// const VideoContainer = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     getVideos();
//   }, []);

//   const getVideos = async () => {
//     const data = await fetch(YOUTUBE_VIDEOS_API);
//     const json = await data.json();
//     setVideos(json.items);
//   };

//   return (
//     <div className="flex flex-wrap">
//     {videos[0] && <AddVideaoCard info={videos[0]}/>}
//       {videos.map((video) => (
//         <Link key={video.id} to={"/watch?v=" + video.id}>
//           <VideoCard info={video} />
//         </Link>
//       ))}
//     </div>
//   );
// };


// export default VideoContainer;
