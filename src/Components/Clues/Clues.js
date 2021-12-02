import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CluesContext } from "../Main";

/*
   AANWIJZINGEN
   ------------
   Lijst hier de kamers, wapens en verdachten op.
*/
const Clues = () => {
const clues = useContext(CluesContext);
console.log(clues)
  return (
    <div className="full file">
      <h2>Aanwijzingen</h2>
      <div>
      {clues.map((item, index) => (item.type == "suspect") ? (<li key={index}>{"Type: " + JSON.stringify(item.type) + ", Titel: " + JSON.stringify(item.title) + ", Kleur: " + JSON.stringify(item.color)}</li>) 
      : (<li key={index}>{"Type: " + JSON.stringify(item.type) + ", Titel: " + JSON.stringify(item.title)}</li>))}
      </div>
    </div>
  );
};

export default Clues;
