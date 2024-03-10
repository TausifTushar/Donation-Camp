/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const AllCard = ({ singelDonation }) => {
  const {
    title,
    category,
    id,
    text_color,
    price,
    image,
    color,
    category_color,
  } = singelDonation;
  // const goDetails = (title) => {
  //   console.log(title);
  // };

  return (
    <div>
      <Link to={`/details/${id}`} >
        <div
          style={{ backgroundColor: color }}
          className="w-[312px] h-[287px] rounded-xl"
        >
          <img
            className="w-[312px] h-[194px] object-cover rounded-t-xl"
            src={image}
            alt=""
          />
          <div
            style={{ backgroundColor: category_color, color: text_color }}
            className=" font-medium text-sm inline-block p-1 ml-3 mt-2 rounded"
          >
            {" "}
            <p className="">{category}</p>
          </div>
          <p
            style={{ color: text_color }}
            className=" font-semibold text-lg w-56 h-6 ml-3 mt-2"
          >
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AllCard;
