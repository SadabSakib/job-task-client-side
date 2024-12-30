// import React from 'react';

// const UpdateArtifact = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default UpdateArtifact;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../components/hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

// import { AuthContext } from "../provider/AuthProvider";
// //   const { user } = useContext(AuthContext);
const UpdateArtifact = () => {
  const axiosSecure = useAxiosSecure();
  // const param=useParams()
  const [myAdded, setMyAdded] = useState();
  const {
    user,
    // setUser,
    // loading,
    // creatUser,
    // signInUser,
    // handleGoogleSignIn,
    // resetPass,
    // handleSignOut,
  } = useContext(AuthContext);
  const param = useParams();
  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`artifacts/${param?.id}`)
        .then((res) => {
          setMyAdded(res.data);
          console.log(res.data);
        })
        .catch((err) => console.error("Error fetching artifacts:", err));
    }
  }, [user, axiosSecure, param]);
  console.log(myAdded);
  const [formData, setFormData] = useState({
    name: myAdded?.name,
    email: user?.email,
    artifactName: myAdded?.artifactName,
    artifactImage: myAdded?.artifactImage,
    historicalContext: myAdded?.historicalContext,
    artifactType: myAdded?.artifactType,
    createdAt: myAdded?.createdAt,
    discoveredBy: myAdded?.discoveredBy,
    discoveredAt: myAdded?.discoveredAt,
    presentLocation: myAdded?.presentLocation,
  });
  useEffect(() => {
    if (myAdded) {
      setFormData({
        name: myAdded.name,
        email: user?.email || "",
        artifactName: myAdded.artifactName,
        artifactImage: myAdded.artifactImage,
        historicalContext: myAdded.historicalContext,
        artifactType: myAdded.artifactType,
        createdAt: myAdded.createdAt,
        discoveredBy: myAdded.discoveredBy,
        discoveredAt: myAdded.discoveredAt,
        presentLocation: myAdded.presentLocation,
      });
    }
  }, [myAdded, user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      userImg: user.photoURL,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("addartifact", formData);
    // fetch("http://localhost:5000/artifacts", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       console.log(data);
    //       console.log(data.insertedId);
    //       alert("added");
    //       e.target.reset();
    //     }
    //   });

    axiosSecure
      .put(`artifacts/${param?.id}`, formData)
      .then((res) => {
        console.log("Artifact updated:", res.data);
        toast.success("Artifact updated successfully!");
      })
      .catch((err) => {
        console.error("Error updating artifact:", err);
        toast.error("Failed to update artifact");
      });
    //   fetch(`http://localhost:5000/artifact/${_id}`, {
    //         method: "PUT",
    //         headers: {
    //           "content-type": "application/json",
    //         },
    //         body: JSON.stringify(visaData),
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           console.log(data);
    //           if (data.modifiedCount > 0) {
    //             //   console.log(data._id);
    //             toast.success("Visa added successfully!");
    //             // e.target.reset();
    //           } else {
    //             toast.error("No changes made or visa not found.");
    //           }
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //           toast.error("Error updating visa");
    //         });
    // toast.success("Artifact data updated successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Contribute Your Artifact</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Artifact Name</label>
          <input
            type="text"
            name="artifactName"
            value={formData.artifactName}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Artifact Image (URL)</label>
          <input
            type="text"
            name="artifactImage"
            value={formData.artifactImage}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Historical Context</label>
          <input
            type="text"
            name="historicalContext"
            value={formData.historicalContext}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Artifact Type</label>
          <select
            name="artifactType"
            value={formData.artifactType}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Select Type</option>
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Created At</label>
          <input
            type="text"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Discovered By</label>
          <input
            type="text"
            name="discoveredBy"
            value={formData.discoveredBy}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Discovered At</label>
          <input
            type="text"
            name="discoveredAt"
            value={formData.discoveredAt}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Present Location</label>
          <input
            type="text"
            name="presentLocation"
            value={formData.presentLocation}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Artifact
        </button>
      </form>
    </div>
  );
};

export default UpdateArtifact;
