import React, {useContext} from "react";
import { useSettings } from "../context/useSettings";
import { CluesContext } from "../Main";

/*
   HET HUIS
   --------
   Bouw het huis en gebruik onSelectRoom bij klikken op een kamer.
*/

export const Mansion = ({ onSelectRoom }) => {
  const clues = useContext(CluesContext);
  const { settings, setSettings } = useSettings();
console.log(clues);

  return (
    <div>
      {clues.map((item, index) => (item.type == "room") ? (<li key={index} onClick={onSelectRoom}> <a>{JSON.stringify(item.title)}</a></li>): null)}
    </div>
  );
};
