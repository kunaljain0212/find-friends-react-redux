import React from "react";
import Cards from "./Cards";

const Cardlist = ({ data }) => {
  // if (true) {
  //   throw new Error('Noooooooo!!');
  // }

  return (
    <div>
      {data.map((user, i) => {
        return (
          <Cards
            key={user.id}
            id={user.id}
            name={user.name}
            contact={user.contact}
            email = {user.email}
          />
        );
        //return <Cards key = {i} id={data[i].id} name={data[i].name} contact={data[i].contact} />
      })}
    </div>
  );
};

export default Cardlist;
