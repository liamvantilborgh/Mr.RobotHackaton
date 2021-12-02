import React, { useContext, useEffect, useState } from "react";
import { useSettings } from "../context/useSettings";
import { CluesContext } from "../Main";
import axios from "axios";

/*
   SUGGESTIE FORMULIER
   -------------------
   Maak hier een formulier om een suggestie te verrichten.
*/

export const MakeSuggestionForm = ({ gameKey, selectedRoom }) => {
  const { settings } = useSettings();
  const [suspects, setSuspects] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const clues = useContext(CluesContext);
  const axios = require('axios');

  useEffect( ()=> {
    setSuspects(clues.filter(item => (item.type == "suspect")))
    setWeapons(clues.filter(item => (item.type == "weapon")))
    console.log(suspects);
  }, [])
  
  const add = () =>{
    const token = window.btoa(settings.auth.username + ":" + settings.auth.password);
    axios.post(
      settings.baseURL + settings.url.suggest + "?key=" + gameKey,{room: selectedRoom}, {headers: {'Authorization': `Basic ${token}`}}
    )
    .then((res) => console.log(res))
  } ;
  return (
    <form>
      <label>
        Suspect:
        <select>
          {suspects.map(item => {
            console.log(item);
            return(<option key={item.id} value={JSON.stringify(item.id)}>
            {item.title}
          </option>);      
          })}
        </select>
      </label>
      <label>
        Weapon:
        <select>
          {weapons.map(item => {
            console.log(item);
            return(<option key={item.id} value={JSON.stringify(item.id)}>
            {item.title}
          </option>);      
          })}
        </select>
      </label>
        <button 
        type="submit"
        onClick={add()}>
          test
        </button>
    </form>
  );
};
