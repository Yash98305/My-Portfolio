import React from 'react'
import "../css/card.css"
const Card = ({n}) => {
  return (
    <div class="container">
     <div class="card">
       <div class="face face1">
         <div class="content">
            <i class="fab fa-windows"></i>            
           <h3>Windows {n}</h3>
         </div>
       </div>
       <div class="face face2">
         <div class="content">
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
           <a href="#" type="button">Read More</a>
         </div>
       </div>
    </div>
    </div>
    
  )
}

export default Card