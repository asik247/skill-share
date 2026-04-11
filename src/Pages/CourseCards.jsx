import React from "react";
import { Link } from "react-router";

const CourseCards = ({ courseCard }) => {
  const {
    skillId,
    skillName,
    image,
    rating,
    price,
  } = courseCard;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 p-10 border-2 border-red-400">
       
      {/* Image */}
      <figure>
        <img
          src={image || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt={skillName}
          className="h-48 w-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        
        {/* Skill Name */}
        <h2 className="card-title text-lg font-bold">
          {skillName}
        </h2>

        {/* Rating */}
        <p className="text-yellow-500 font-semibold">
          ⭐ {rating}
        </p>

        {/* Price */}
        <p className="text-primary font-bold text-xl">
          ${price}
        </p>

        {/* Button */}
        <div className="card-actions justify-end mt-4">
          <Link to={`/details/${skillId}`}>
            <button className="btn btn-primary btn-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;