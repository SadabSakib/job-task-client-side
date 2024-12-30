import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../provider/AuthProvider";

const AddVisa = () => {
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
  const [visaData, setVisaData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
    email: user.email,
    appliedDate: new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }),
  });
  // MyAdded a user er add koragula dekhaite hobe dekhe  unique identifier hisebe email rakhtasi

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const newDocuments = checked
        ? [...visaData.requiredDocuments, value]
        : visaData.requiredDocuments.filter((doc) => doc !== value);
      setVisaData({
        ...visaData,
        requiredDocuments: newDocuments,
        // appliedDate:
      });
    } else {
      setVisaData({ ...visaData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Visa Data:", visaData);
    // // send data to the server and database
    fetch("http://localhost:5000/visas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visaData ),
    })
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
      <h1 className="text-2xl font-bold mb-4">Add Visa</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Country Image URL</label>
          <input
            type="text"
            name="countryImage"
            value={visaData.countryImage}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter the image URL"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Country Name</label>
          <input
            type="text"
            name="countryName"
            value={visaData.countryName}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter the country name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Visa Type</label>
          <select
            name="visaType"
            value={visaData.visaType}
            onChange={handleInputChange}
            className="select select-bordered w-full"
          >
            <option value="">Select visa type</option>
            <option value="Tourist visa">Tourist visa</option>
            <option value="Student visa">Student visa</option>
            <option value="Official visa">Official visa</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            value={visaData.processingTime}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter processing time"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Required Documents</label>
          <div className="form-control">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                name="requiredDocuments"
                value="Valid passport"
                onChange={handleInputChange}
                className="checkbox checkbox-primary"
              />
              <span className="label-text ml-2">Valid passport</span>
            </label>
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                name="requiredDocuments"
                value="Visa application form"
                onChange={handleInputChange}
                className="checkbox checkbox-primary"
              />
              <span className="label-text ml-2">Visa application form</span>
            </label>
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                name="requiredDocuments"
                value="Recent passport-sized photograph"
                onChange={handleInputChange}
                className="checkbox checkbox-primary"
              />
              <span className="label-text ml-2">
                Recent passport-sized photograph
              </span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={visaData.description}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Age Restriction</label>
          <input
            type="number"
            name="ageRestriction"
            value={visaData.ageRestriction}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter age restriction"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Fee</label>
          <input
            type="number"
            name="fee"
            value={visaData.fee}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter fee"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Validity</label>
          <input
            type="text"
            name="validity"
            value={visaData.validity}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter validity period"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Application Method</label>
          <input
            type="text"
            name="applicationMethod"
            value={visaData.applicationMethod}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter application method"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Add Visa
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddVisa;
