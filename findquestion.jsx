import React from 'react';
import "./findquestion.css";

function Find_Question() {
    return (
        <>
          
            <h2 className='filter'>FILTER QUESTIONS</h2>

            <div className="outer-container">
            <div class="box">
                <br></br>
                <div className="t1">
                    <label for="t1">Title : </label>
                    <input type="text" placeholder=" Filter by title" required></input>
                </div>
                <br></br>
                <div className="tag1">
                    <label for="tag1">Tag : </label>
                    <input type="text" placeholder=" Filter by tag" required></input>
                </div>
                <br></br>
                <div className="fil">
                    <button type="fil">FILTER</button>
                </div>
            </div>

        </div>
            
            <br></br>
            <div className='list'>
                <h2>Questions</h2>
            </div>   
                 
                <h3 className='alter'>TITLE: Khushi</h3>
                
                <div className='buttons'>
                <button type="delete">DELETE</button>
                <button type="expand">EXPAND</button>
                </div>
                <hr className='color'></hr>
             
               
               

           
        </>
    )

}

export default Find_Question;