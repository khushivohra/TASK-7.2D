import React from 'react';
import "./question.css";

function Question(){
    return(
        <>
           <div className="data">
        <h3>What do you want to share or ask</h3>
      </div>
      <div>
        <h3>Please elaborate the details in the given box</h3>
      </div>
      
        <div className="title">
        <label for="title">Title  </label>
          <input type="text" placeholder="Start your question which how, what, why, etc." required></input>
        </div>
        <br></br>
         
        <div className="problem">
        <label for="problem">Describe your problem  </label>
          <input type="text" required></input>

        </div>
        <br></br>
        <div className="tags">
        <label for="tags">Tags  </label>
          <input type="text" placeholder="Please add up to 3 tags to describe what your question is about. e.g. Java" required></input>
        </div>
        <br></br>
        <div className= "Post">
        <button type="submit">Post</button>
        </div>
        <br>
        </br>
        </>
       
    )
}
export default Question;

