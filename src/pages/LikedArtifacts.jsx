// import React from 'react';

// const LikedArtifacts = () => {
//     return (
//         <div>
//             LikedArtifacts
//         </div>
//     );
// };

// export default LikedArtifacts;
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../components/hooks/useAxiosSecure";

const LikedArtifacts = () => {
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    console.log(user.email)
  useEffect(() => {
    const fetchLikedArtifacts = async () => {
      try {
        const response = await axiosSecure.get(
          `likedArtifacts/${user.email}`,
        );
        setLikedArtifacts(response?.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch liked artifacts.");
        setLoading(false);
      }
    };

    fetchLikedArtifacts();
  }, [user?.email]);
console.log(likedArtifacts)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Liked Artifacts</h2>
      <ul>
        {likedArtifacts?.map((artifact) => (
          <li key={artifact?._id}>
            <h3>{artifact?.title}</h3>
            <p>{artifact?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedArtifacts;
