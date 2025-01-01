// import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { BiSolidLike } from "react-icons/bi";
// import { AiFillDislike } from "react-icons/ai";
// import useAxiosSecure from "../components/hooks/useAxiosSecure";
// import { AuthContext } from "../provider/AuthProvider";

// const ArtifactDetails = () => {
//   //   const loader = useLoaderData()
//   //   console.log(loader)
// const {user}=useContext(AuthContext)
//   const [artifact, setArtifact] = useState({});
//  const [likedByUser, setLikedByUser] = useState(false);
//   const [likes, setLikes] = useState(0);
//   const { id } = useParams();
//   console.log(id);
//   const axiosSecure = useAxiosSecure();

//   useEffect(() => {
//     axiosSecure.get(`artifacts/${id}`).then((res) => {
//       console.log(res.data);
//       setArtifact(res.data);
//     });
//   }, [id]);
//   const handleLikeToggle = async () => {
//     try {
//       const response = await axiosSecure.post(`/like/${id}`, {
//         email: user?.email,
//       });
//       setLikes(response.data.likes);
//       setLikedByUser(!likedByUser);
//     } catch (error) {
//       console.error("Error toggling like status", error);
//     }
//   };
//   return (
//     <div className="card w-96 bg-base-100 shadow-xl">
//       {" "}
//       <figure>
//         {" "}
//         <img src={artifact.artifactImage} alt="Pharaoh's Necklace" />{" "}
//       </figure>{" "}
//       <div className="card-body">
//         <h2 className="card-title">{artifact.artifactName}</h2>{" "}
//         <p>
//           <strong>Artifact Type:</strong>
//           {artifact.artifactType}
//         </p>{" "}
//         <p>
//           <strong>Historical Context:</strong>
//           {artifact.historicalContext}
//         </p>{" "}
//         <p>
//           <strong>Created At:</strong>
//           {artifact.createdAt}
//         </p>{" "}
//         <p>
//           <strong>Discovered At:</strong> {artifact.discoveredAt}
//         </p>{" "}
//         <p>
//           <strong>Discovered By:</strong> {artifact.discoveredBy}
//         </p>{" "}
//         <p>
//           <strong>Present Location:</strong>
//           {artifact.presentLocation}
//         </p>{" "}
//         <div>
//           <button onClick={handleLikeToggle}>
//             {likedByUser ? <BiSolidLike /> : <AiFillDislike />}
//           </button>
//           <p>{likes} likes</p>
//         </div>
//       </div>{" "}
//     </div>
//   );
// };

// export default ArtifactDetails;

// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { BiSolidLike } from "react-icons/bi";
// import { AiFillDislike } from "react-icons/ai";
// import useAxiosSecure from "../components/hooks/useAxiosSecure";
// import { AuthContext } from "../provider/AuthProvider";

// const ArtifactDetails = ({ userEmail }) => {
//   const [artifact, setArtifact] = useState({});
//   const [likedByUser, setLikedByUser] = useState(false);
//   const [likes, setLikes] = useState(0);
//   const { id } = useParams();
//   const axiosSecure = useAxiosSecure();
//   const {user}=useContext(AuthContext)

//   useEffect(() => {
//     axiosSecure.get(`artifacts/${id}`).then((res) => {
//       const artifactData = res.data;
//       setArtifact(artifactData);
//       setLikes(artifactData.likes || 0); // Default to 0 if likes field is missing
//       // Check if the user has liked the artifact
//       axiosSecure.get(`/likes/${id}/${user?.email}`).then((likeRes) => {
//         setLikedByUser(likeRes.data.liked);
//       });
//     });
//   }, [id, userEmail, axiosSecure]);

//   const handleLikeToggle = async () => {
//     try {
//       const response = await axiosSecure.post(`/like/${id}`, {
//         email: userEmail,
//       });
//       setLikes(response.data.likes);
//       setLikedByUser(!likedByUser);
//     } catch (error) {
//       console.error("Error toggling like status", error);
//     }
//   };

//   return (
//     <div className="card w-96 bg-base-100 shadow-xl">
//       <figure>
//         <img src={artifact.artifactImage} alt="Artifact" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{artifact.artifactName}</h2>
//         <p>
//           <strong>Artifact Type:</strong> {artifact.artifactType}
//         </p>
//         <p>
//           <strong>Historical Context:</strong> {artifact.historicalContext}
//         </p>
//         <p>
//           <strong>Created At:</strong> {artifact.createdAt}
//         </p>
//         <p>
//           <strong>Discovered At:</strong> {artifact.discoveredAt}
//         </p>
//         <p>
//           <strong>Discovered By:</strong> {artifact.discoveredBy}
//         </p>
//         <p>
//           <strong>Present Location:</strong> {artifact.presentLocation}
//         </p>
//         <div>
//           <button onClick={handleLikeToggle}>
//             {likedByUser ? <AiFillDislike /> : <BiSolidLike />}
//           </button>
//           <p>{likes} likes</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtifactDetails;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { AiFillDislike } from "react-icons/ai";
import useAxiosSecure from "../components/hooks/useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";

const ArtifactDetails = () => {
  const [artifact, setArtifact] = useState({});
  const [likedByUser, setLikedByUser] = useState(false);
  const [likes, setLikes] = useState(0);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(`artifacts/${id}`);
        const artifactData = res.data;
        setArtifact(artifactData);
        setLikes(artifactData.likes || 0); // Default to 0 if likes field is missing

        // Check if the user has liked the artifact
        const likeRes = await axiosSecure.get(`/likes/${id}/${user?.email}`);
        setLikedByUser(likeRes.data.liked);
      } catch (error) {
        console.error("Error fetching artifact data", error);
      }
    };

    fetchData();
  }, [id, user?.email, axiosSecure]);

  const handleLikeToggle = async () => {
    // try {
    //   const response = await axiosSecure.post(`/like/${id}`, {
    //     email: user.email,
    //   });
    //   setLikes(response.data.likes);
    //   setLikedByUser(!likedByUser);
    // } catch (error) {
    //   console.error("Error toggling like status", error);
    // }

    try {
      // Optimistically update the UI
      setLikedByUser(!likedByUser);
      setLikes((prevLikes) => (likedByUser ? prevLikes - 1 : prevLikes + 1));

      const response = await axiosSecure.post(`/like/${id}`, {
        email: user.email,
      });

      // Optionally, update the state again after the server response to ensure accuracy
      setLikes(response.data.likes);
      setLikedByUser(!likedByUser);
    } catch (error) {
      console.error("Error toggling like status", error);
      // Revert the optimistic update in case of error

      // nicher part ta bade errror dey, but abr kajo kore,
      // setLikedByUser((prevLiked) => !prevLiked);
      // setLikes((prevLikes) => (likedByUser ? prevLikes + 1 : prevLikes - 1));
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={artifact.artifactImage} alt="Artifact" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{artifact.artifactName}</h2>
        <p>
          <strong>Artifact Type:</strong> {artifact.artifactType}
        </p>
        <p>
          <strong>Historical Context:</strong> {artifact.historicalContext}
        </p>
        <p>
          <strong>Created At:</strong> {artifact.createdAt}
        </p>
        <p>
          <strong>Discovered At:</strong> {artifact.discoveredAt}
        </p>
        <p>
          <strong>Discovered By:</strong> {artifact.discoveredBy}
        </p>
        <p>
          <strong>Present Location:</strong> {artifact.presentLocation}
        </p>
        <div>
          <button onClick={handleLikeToggle}>
            {likedByUser ? <AiFillDislike /> : <BiSolidLike />}
          </button>
          <p>{likes} likes</p>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
