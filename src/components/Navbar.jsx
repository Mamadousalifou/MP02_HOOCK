import React from "react";

export const Navbar = ({ nombreLiker }) => {
  return (
    <div className="entete">
      <h3>Les props liker sont : {nombreLiker}</h3>
    </div>
  );
};
