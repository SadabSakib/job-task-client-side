import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosSecure from "../components/hooks/useAxiosSecure";

const ArtifactDetails = () => {
  //   const loader = useLoaderData()
  //   console.log(loader)
  const [artifact, setArtifact] = useState([]);
  const { id } = useParams();
  console.log(id);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`artifacts/${id}`).then((res) => {
      console.log(res.data);
      setArtifact(res.data);
    });
  }, [id]);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {" "}
      <figure>
        {" "}
        <img src={artifact.artifactImage} alt="Pharaoh's Necklace" />{" "}
      </figure>{" "}
      <div className="card-body">
        <h2 className="card-title">{artifact.artifactName}</h2>{" "}
        <p>
          <strong>Artifact Type:</strong>
          {artifact.artifactType}
        </p>{" "}
        <p>
          <strong>Historical Context:</strong>
          {artifact.historicalContext}
        </p>{" "}
        <p>
          <strong>Created At:</strong>
          {artifact.createdAt}
        </p>{" "}
        <p>
          <strong>Discovered At:</strong> {artifact.discoveredAt}
        </p>{" "}
        <p>
          <strong>Discovered By:</strong> {artifact.discoveredBy}
        </p>{" "}
        <p>
          <strong>Present Location:</strong>
          {artifact.presentLocation}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default ArtifactDetails;
