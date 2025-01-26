import React, { useEffect, useState } from "react";
import useAxiosSecure from "../components/hooks/useAxiosSecure";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [likes, setLikes] = useState(0);
  const [id, setId] = useState(null);
  const [query, setQuery] = useState("");
  // useEffect(() => {
  //   artifacts.forEach((artifact) => {
  //     setId(artifact._id);
  //   });
  // },[artifacts])
  //   // const [query, setQuery] = useState("");
  // useEffect(async() => {
  //   const res = await axiosSecure.get(`artifacts/${id}`);
  //       const artifactData = res.data;
  //       // setArtifact(artifactData);
  //       setLikes(artifactData.likes || 0);
  // }),[id]

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://assignment-11-server-side-omega-beige.vercel.app/searchArtifact?q=${query}`
      );
      const data = await response.json();
      setArtifacts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`artifacts`).then((res) => {
      console.log(res.data);
      setArtifacts(res.data);
    });
  }, []);
  return (
    <div>
       <Helmet>
              <title>Artifact Tracker|All Artifacts</title>
            </Helmet>
      {" "}
      <form onSubmit={handleSearch}>
        {" "}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by country name"
          className="input input-bordered w-full"
        />{" "}
        <button type="submit" className="btn btn-primary">
          Search
        </button>{" "}
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4 min-h-screen">
        {artifacts?.map((artifact, idx) => (
          <div key={idx} className="card bg-base-100 w-full shadow-xl">
            <figure>
              <img src={artifact.artifactImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-col items-center">
                <h2 className="card-title">{artifact.artifactName}</h2>
                <p>{artifact.artifactType}</p>
                <p>{artifact.historicalContext}</p>
              </div>
              <div className="card-actions justify-end">
                {/* <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div> */}
                <div></div>
                <div className="flex items-center">
                  {" "}
                  <FaThumbsUp className="mr-1 text-gray-500" />{" "}
                  <span className="text-gray-500">{artifact.likes}</span>{" "}
                </div>{" "}
                <div className="flex items-center">
                  {" "}
                  <FaThumbsDown className="mr-1 text-gray-500" />{" "}
                  <span className="text-gray-500">0 dislikes</span>{" "}
                </div>
              </div>
              <div>
                <NavLink to={`/artifact/${artifact._id}`}>
                  <button className="btn btn-outline btn-primary">
                    View Details
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
