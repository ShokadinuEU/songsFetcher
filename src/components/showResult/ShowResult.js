import React from "react";
import "../searchField/search.css";

const ShowResult = props => {
  const data = props.data;
  const user = props.user.username;
  // console.log(data, user);

  return (
    <div>
      <div className="showResult">
        <h2>Art work is apparently "null" from api</h2>
        <h4>Artist Name: {user}</h4>
        <h5>Song Name: {data.title} </h5>
        <a href={data.permalink_url}>Click here to for more Info</a>
      </div>
    </div>
  );
};

export default ShowResult;
