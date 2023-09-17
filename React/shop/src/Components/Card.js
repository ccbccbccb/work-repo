import React from 'react';
import  data  from '../Data/data.js';
import { useState } from 'react';


function Card() {
    let [shoes] = useState(data);
  return (
    <div className="row">
        { 
        shoes.map(function(value,i){
          return(
        <div className="col-md-4" key={i}>
           <span>{value.picture}</span>
           <h4>{value.title}</h4>
           <p>{value.price}</p>
           </div>
)})
}
           </div>
  )
}

export default Card
