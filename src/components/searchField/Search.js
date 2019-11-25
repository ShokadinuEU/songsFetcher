import React, { useState, useEffect } from "react";
import "./search.css";
import ShowResult from "../showResult/ShowResult";

const Search = props => {
  const YOUR_CLIENT_ID = "PGBAyVqBYXvDBjeaz3kSsHAMnr1fndq1";
  const urlString = `https://api.soundcloud.com/tracks/13158665?client_id=${YOUR_CLIENT_ID}`;

  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [showData, setShowData] = useState(false);

  async function fetchUrl() {
    const response = await fetch(urlString);
    const json = await response.json();
    setData(json);
    setUser(json.user);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  // console.log(data, user);

  const handleClick = () => {
    setShowData(!showData);
  };

  return (
    <div className="searchMain">
      <div className="inputHolder">
        <input className="searchInput" type="text" />
        <button className="searchButton" onClick={handleClick}>
          Go!
        </button>
      </div>
      {showData ? (
        <ShowResult data={data} user={user} />
      ) : (
        <div>Looking for a song?</div>
      )}
    </div>
  );
};

export default Search;
