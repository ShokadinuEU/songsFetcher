import React from "react";
import "./result.css";

const ShowResult = props => {
  const data = props.data;
  const artist = props.artist;
  console.log(props);

  return (
    <div>
      {data.map((e, i) => (
        <div className="showResult" key={i}>
          <img src={e.artwork_url} alt={e.policy} />
          <div className="basic-info">
            <h4>Artist Name: {e.genre}</h4>
            <h5>Song Name: {e.title} </h5>
          </div>
          <a href={e.permalink_url}>More Info</a>
        </div>
      ))}
    </div>
  );
};

export default ShowResult;
