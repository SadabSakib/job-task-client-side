import React, { useEffect, useState } from "react";
import useAxiosSecure from "../components/hooks/useAxiosSecure";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  //   const [query, setQuery] = useState("");

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`artifacts`).then((res) => {
      console.log(res.data);
      setArtifacts(res.data);
    });
  }, []);
  return (
    <div>
      {artifacts?.map((artifact, idx) => (
        <div key={idx} className="card bg-base-100 w-96 shadow-xl">
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
                <span className="text-gray-500">3 likes</span>{" "}
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
  );
};

export default AllArtifacts;
