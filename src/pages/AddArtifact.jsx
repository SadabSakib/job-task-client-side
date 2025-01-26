import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
// import { AuthContext } from "../provider/AuthProvider";
// //   const { user } = useContext(AuthContext);
const AddArtifact = () => {
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

  const [formData, setFormData] = useState({
    name: user?.displayName,
    email: user?.email,
    artifactName: "",
    artifactImage: "",
    historicalContext: "",
    artifactType: "",
    createdAt: "",
    discoveredBy: "",
    discoveredAt: "",
    presentLocation: "",
  });

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
    fetch(
      "https://assignment-11-server-side-omega-beige.vercel.app/artifacts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          console.log(data.insertedId);
          alert("added");
          e.target.reset();
        }
      });
    toast.success("Visa added successfully!");
  };

  return (
    <div className="container mx-auto p-4">
       <Helmet>
              <title>Artifact Tracker|Add Artifacts</title>
            </Helmet>
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

export default AddArtifact;
