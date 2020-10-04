import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {

  return (
    <>
      {robots.map((user, key) => {
        return (
          <Card key={key} email={user.email} name={user.name} id={user.id} />
        );
      })}
    </>
  );
};

export default CardList;
