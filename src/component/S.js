import React from "react";
import "../style/Slide.css";
import img1 from "../img/1.jpg";
import img2 from"../img/2.jpg";
import img3 from"../img/3.jpg";

function S() {
  return (
    <>
      <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-70 h-10" alt={img1}/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt={img2}/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt={img3}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
 
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
 
  
</div>
      </div>
      <div className="const">
       <h1 id="first">What is ChatBotAI?</h1>

      <div className="second container">
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. durgesh harsh aman  <br/> Culpa
          consectetur quas veritatis consequatur sit quia<br/> minima ducimus
          corrupti, aliquam!
        </span>
      </div>
      </div>
    </>
  );
}

export default S;
