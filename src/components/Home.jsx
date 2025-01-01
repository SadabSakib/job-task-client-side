import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Slider from "./Visa/SliderWithAnimation/Slider";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage1 from "../assets/download.jpg";
import ExampleCarouselImage2 from "../assets/images (1).jpg";
import ExampleCarouselImage3 from "../assets/images.jpg";
import useAxiosSecure from "./hooks/useAxiosSecure";
import { FaThumbsUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    ExampleCarouselImage1,
    ExampleCarouselImage2,
    ExampleCarouselImage3,
  ];


const axiosSecure = useAxiosSecure();
  const [topArtifacts, setTopArtifacts] = useState([]);
  useEffect(() => {
    const fetchTopArtifacts = async () => {
      try {
        const response = await axiosSecure.get(
          "http://localhost:5000/api/top-artifacts"
        );
        setTopArtifacts(response.data);
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      }
    };
    fetchTopArtifacts();
  }, []);

  console.log(topArtifacts)
  return (
    <div className="">
      {/* <Slider></Slider> */}
      <Slider {...settings}>
        {" "}
        {images.map((image, index) => (
          <div key={index}>
            {" "}
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%" }}
            />{" "}
          </div>
        ))}{" "}
      </Slider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4 min-h-screen">
        {topArtifacts?.map((artifact, idx) => (
          <div key={idx} className="card bg-base-100 w-full m-5 shadow-xl">
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

      <NavLink to={"/all-artifacts"}>
        <button className="btn btn-block btn-success m-5">See all</button>
      </NavLink>
    </div>
  );
};

export default Home;
