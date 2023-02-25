import React from "react";
// import img from "../img/logo.webp";
import "../style/footer.css";

const Footer = () => {
  return (
    <>
      <section class="footer">
      <div class="box-container">

        <div class="box">
        <div className="fit">
          <h2>product</h2>
        </div>
        </div>

        <div class="box">
          <h2>sales</h2>
          <a href="#">my accounts</a>
          <a href="#"> my order</a>
          <a href="#">my favorite</a>
        </div>

        <div class="box">
          <h2>integrate</h2>
          <a href="#">India</a>
          <a href="#">USA</a>
          <a href="#">Japan</a>
          <a href="#">France</a>
        </div>

        <div class="box">
        <div className="fit">
          <h2>network</h2>
        </div>
        </div>

      </div>
      <div class="credit">done by <span>@RomanEmpire</span> | all right reserved</div>


    </section>
    </>
  );
};

export default Footer;
