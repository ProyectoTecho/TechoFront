import React from "react";
import "./index.css";
import testimonio from "../../assets/testimonio-min.jpg";
import testimonio1 from "../../assets/testimonio1-min.jpg";
import testimonio2 from "../../assets/testimonio2-min.jpg";
import testimonio3 from "../../assets/testimonio3-min.jpg";

export default function Testimony() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="w-50" src={testimonio} alt="First slide" />
      <img class="w-50" src={testimonio1} alt="Second slide" />
    </div>
    
    <div class="carousel-item">
      <img class="w-50" src={testimonio2} alt="Third slide" />
      <img class="w-50" src={testimonio3} alt="Third slide" />
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  );
}
