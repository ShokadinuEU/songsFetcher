import React, { useState, useEffect } from "react";
import "./search.css";
import ShowResult from "../showResult/ShowResult";

const Search = props => {
  const YOUR_CLIENT_ID = "PGBAyVqBYXvDBjeaz3kSsHAMnr1fndq1";
  const [data, setData] = useState([]);
  const [artist, setArtist] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [showData, setShowData] = useState(false);
  const urlString = `https://api.soundcloud.com/tracks?q=${userSearch}&client_id=${YOUR_CLIENT_ID}`;

  async function fetchUrl() {
    const response = await fetch(urlString);
    const json = await response.json();
    setData(json);
    setArtist(json);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  console.log(artist);

  const handleClick = () => {
    if (userSearch === "") {
      setShowData(false);
    } else {
      setShowData(!showData);
    }
  };

  const handleOnChange = e => {
    e.preventDefault();
    setUserSearch(e.target.value);
  };

  return (
    <div className="searchMain">
      <div className="inputHolder">
        <input
          className="searchInput"
          placeholder="Search..."
          type="text"
          autoFocus
          value={userSearch}
          onChange={handleOnChange}
        />
        <button className="searchButton" onClick={handleClick}>
          Go!
        </button>
      </div>
      <div className="displayData">
        {showData ? (
          <ShowResult data={data} artist={artist} />
        ) : (
          <div>Looking for a song?</div>
        )}
      </div>
    </div>
  );
};

export default Search;
