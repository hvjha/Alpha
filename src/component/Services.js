import React from 'react'
import "../style/services.css";
import img from '../img/2.jpg'
import { FaTelegramPlane } from 'react-icons/fa';

function services() {
  return (
    <>
    <div>
      <h3>services</h3>
    </div>
   <div className="contain">
    <div class="card" >
  <img src={img} class="card-img-top" alt={img}/>
  <div class="card-body">
  <h4 class="card-text">Customer Support</h4>
    <p id="git"><FaTelegramPlane/>harshjklhfds</p>
    <p id="git"><FaTelegramPlane/>harshjklhfds</p>
  </div>
</div>
<div class="card" >
  <img src={img} class="card-img-top" alt={img}/>
  <div class="card-body">
    <h4 class="card-text">Reliable Network</h4>
    <p id="git"><FaTelegramPlane/>harshjklhfds</p>
    <p id="git"><FaTelegramPlane/>harshjklhfds</p>
  </div>
</div>
<div class="card" >
  <img src={img} class="card-img-top" alt={img}/>
  <div class="card-body">
  <h4 class="card-text">Language Compatiable</h4>
  <p id="git"><FaTelegramPlane/>harshjklhfds</p>
    <p id="git"><FaTelegramPlane/>harshjklhfds</p>
  </div>
</div>
<div class="card" >
  <img src={img} class="card-img-top" alt={img}/>
  <div class="card-body">
  <h4 class="card-text">Handful Working</h4>
  <p id="git"><FaTelegramPlane/>harshjklhfds</p>
    <p id="git"><FaTelegramPlane/>harshjklhfds</p>
  </div>
</div>
</div>
  </>
  )
}

export default services

