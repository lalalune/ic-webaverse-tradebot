import React from 'react';
import './btnstyle.css';
const Simple = () => {

    const clickEvent = () => {
        console.log("I am clicked hehe~");
    }
    const divEvent = () => {
        console.log("I am div haha~");
    }
  return (
     <div className='divsection'> <button className="btn-ccccc" onClick={clickEvent}>AAAAAAAA</button>
     <div className="divclick" onClick={divEvent}>adsf</div>
     </div>
  )
};
export default Simple;