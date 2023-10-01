import React, { useState, useRef } from 'react';
import './article.css';
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

function Article() {
  const [image, setImageUpload] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    if (image === null) {
      alert('Please select an image.');
      return;
    }

    const imageref = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageref, image).then(() => {
      alert('Image uploaded');
    });
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="data">
        <h3>What do you want to share or ask</h3>
      </div>
      <div>
        <h3>Please elaborate the details in the given box</h3>
      </div>

      <div className="t">
        <label htmlFor="t">Title </label>
        <input type="text" placeholder="Enter a descriptive title" required></input>
      </div>
      <br></br>

      <div className="image">
        <label htmlFor="image">Add an image: </label>
        <input type="text" required></input>
        <div className="browse">
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <button onClick={handleBrowseClick}>Browse</button>
          <button onClick={handleBrowseClick}>Upload</button>

        </div>
      </div>

      <div className="abstract">
        <label for="abstract">Abstract </label>
        <input type="text" placeholder="Enter a 1-paragraph abstract" required></input>
      </div>
      <br></br>
      <div className="article">
        <label for="article text">Article Text</label>
        <input type="text" placeholder="Enter a 1-paragraph abstract" required></input>
      </div>
      <br></br>

      <div className="tag">
        <label for="tag">Tags </label>
        <input
          type="text"
          placeholder="Please add up to 3 tags to describe what your question is about. e.g. Java"
          required
        ></input>
      </div>
      <br></br>
      <div className="P">
        <button type="button">Post</button>
       
      </div>
      <br></br>
    </>
  );
}

export default Article;
