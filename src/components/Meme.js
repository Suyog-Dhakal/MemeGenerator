import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form-inputs" placeholder="Top-text" />
        <input type="text" className="form-inputs" placeholder="Bottom-text" />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} className="meme-image" />
    </main>
  );
}

//5.18
