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
      <div>Lijst hier de kamers, wapens en verdachten op.</div>
      <div>
      {clues.map((item, index) => (<li key={index}>{JSON.stringify(item)}</li>)
          )}
      </div>
    </div>
  );
};

export default Clues;
