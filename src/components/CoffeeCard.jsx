// import React from 'react';

import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  console.log(coffee);

  const handleDelete = (_id) => {
    console.log(_id);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = coffees.filter(cof => cof._id !== _id)
          setCoffees(remaining)
        }
      });
  };
  return (
    <div>
      {name},{chef},{supplier},{taste},{category},{details},{photo}
      <button className="btn btn-primary">VIEW</button>
      <Link to={`updateCoffee/${_id}`}>
        <button className="btn btn-secondary">EDIT</button>
      </Link>
      <button className="btn btn-warning" onClick={() => handleDelete(_id)}>
        DELETE
      </button>
    </div>
  );
};

export default CoffeeCard;
