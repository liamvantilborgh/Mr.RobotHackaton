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
  const [suspect, setSuspect] = useState([]);
  const [weapon, setWeapon] = useState([]);
  const clues = useContext(CluesContext);
  const axios = require("axios");

  useEffect(() => {
    setSuspects(clues.filter((item) => item.type === "suspect"));
    setWeapons(clues.filter((item) => item.type === "weapon"));
  }, []);

  const add = () => {
    const token = window.btoa(
      settings.auth.username + ":" + settings.auth.password
    );

    console.log(selectedRoom);
    console.log(weapon);
    console.log(suspect);

    axios
      .post(
        settings.baseURL + settings.url.suggest + "?key=" + gameKey,
        { room: selectedRoom, weapon: weapon, suspect: suspect },
        { headers: { Authorization: `Basic ${token}` } }
      )
      .then((res) => console.log(res));
  };
  return (
    <form onSubmit={add}>
      <label>
        Suspect:
        <select>
          {suspects.map((item) => {
            return (
              <option
                key={item.id}
                value={JSON.stringify(item.id)}
                onChange={(e) => setSuspect(e.target.value)}
              >
                {item.title}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        Weapon:
        <select>
          {weapons.map((item) => {
            return (
              <option
                key={item.id}
                value={JSON.stringify(item.id)}
                onChange={(e) => setWeapon(e.target.value)}
              >
                {item.title}
              </option>
            );
          })}
        </select>
      </label>
      <button type="submit">Suggest</button>
    </form>
  );
};
