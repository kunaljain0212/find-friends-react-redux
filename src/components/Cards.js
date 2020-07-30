import React from "react";

const Cards = (props) => {
  return (
    <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <img src={`https://robohash.org/${props.id}?200x200`} alt="Girl in a jacket"></img>
      <div>
        <h2>{props.name}</h2>
        <p>{props.contact}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Cards;
