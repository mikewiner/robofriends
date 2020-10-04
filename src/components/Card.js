import React from "react";

const Card = ({ name, id, email}) => {
  return (
    <div className="bg-teal-200 inline-block text-center p-2 m-2 border-2 shadow-lg rounded-lg transform ease-in duration-200 hover:scale-105">
      <img alt="robot cards" width="100%" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2 className="text-lg font-bold p-2 ">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
