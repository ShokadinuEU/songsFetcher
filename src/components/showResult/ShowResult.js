import React from "react";
import "./result.css";

const ShowResult = props => {
  const data = props.data;
  const user = props.user.username;
  console.log(props);

  return (
    <div>
      <div className="showResult">
        <h2>Artwork value: {data.artwork_url}</h2>
        <h4>Artist Name: {user}</h4>
        <h5>Song Name: {data.title} </h5>
        <a href={data.permalink_url}>More Info</a>
      </div>
    </div>
  );
};

export default ShowResult;
