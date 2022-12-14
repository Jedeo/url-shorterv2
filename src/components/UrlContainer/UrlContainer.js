import React from "react";
import "./UrlContainer.css";
import { deletePost } from "../../apiCalls";

const UrlContainer = ({urls, getNewURl}) => {
  const handleClick = async(id) => {
    await deletePost(id)
    getNewURl()
    
  }

  const urlEls = urls.map((url) => {
    return (
      <div key={url.id} className="url">
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">
          {url.short_url}
        </a>
        <p>{url.long_url}</p>
        <span className="delete" onClick={() => handleClick(url.id) }>&#10005;</span>
      </div>
    );
  });

  return (
    <section className="card-container">
      {urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p>}
    </section>
  );
};

export default UrlContainer;
