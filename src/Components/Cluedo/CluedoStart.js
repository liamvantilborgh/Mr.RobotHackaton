import React, {useContext} from "react";
import {useSettings} from "../context/useSettings";
import Button from "../Button";
import { CluesContext } from "../Main";
import axios from "axios";

/*
   CLUEDO START
   ------------
   In dit component moet je een nieuw spel genereren via de api.
   Geef de nieuwe gameKey mee aan de onStart functie (zie props).
*/

const CluedoStart = ({ onStart }) => {
  const { settings } = useSettings();
  const axios = require('axios');
 
  const startGame = () => {
    const token = window.btoa(settings.auth.username + ":" + settings.auth.password);
      console.log(settings);
        axios.get(
          settings.baseURL + settings.url.new, {headers: {'Authorization': `Basic ${token}`}}
        )
        .then((res) => onStart(res.data))
  };

  return (
    <div className={"file full"}>
      <h2>Cluedo</h2>
      <Button onClick={startGame} value="Start een nieuw spel" />
    </div>
  );
};

export default CluedoStart;
