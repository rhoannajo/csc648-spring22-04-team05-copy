import React from "react";
import nelson from "./Nelson.jpg";
import './nelson.css'


const Nelson = () => {

  return (
    <div className="Nelson" >
      <div className="nelson-info">
        <h1 className="nelson-header"> Nelson Pang - Scrum Master</h1>

        <img src={nelson} style={{ width: 225, height: 300 }} className="nelson-image" />
      </div>
      <div className="nelson-description">My name is Nelson. I am a computer science in my last year. I am the scrum master for
        Team 5. I want to pursue software engineering as a frontend or
        backend developer.
      </div>
    </div>
  );
}

  ;

export default Nelson;
