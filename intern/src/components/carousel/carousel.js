import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handbag from '../../assets/handbag.png'
import React from "react";
import Slider from "react-slick";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div>
         <center><h1>Our Latest Products</h1></center>
         <div className="main-cart">
         <Slider {...settings}>
          <div className="flex-car-outer">
            <img src={handbag}></img>
            <div  className="flex-car">
              <div>
                <p>Navy Blue crepe</p>
                <p>Kashmiri Hand</p>
                <p>Emboroidery Saree</p>
                <br></br>
                <p>Rs. 3400</p>
              </div>
              <div><FavoriteBorderIcon/>
              </div>
              
            </div>
            <div>
              <br></br>
            <button className="cart-button">Add to Cart <span><ShoppingCartIcon/></span></button>
          </div>
            
            
        </div>
          <div className="flex-car-outer">
          <img src={handbag}></img>
            <div  className="flex-car">
              <div>
                <p>Navy Blue crepe</p>
                <p>Kashmiri Hand</p>
                <p>Emboroidery Saree</p>
                <br></br>
                <p>Rs. 3400</p>
              </div>
              <div><FavoriteBorderIcon/>
              </div>
              
            </div>
            <div>
              <br></br>
            <button className="cart-button">Add to Cart <span><ShoppingCartIcon/></span></button>
            
            </div>
          </div>
          <div>
          <img src={handbag}></img>
            <div  className="flex-car">
              <div>
                <p>Navy Blue crepe</p>
                <p>Kashmiri Hand</p>
                <p>Emboroidery Saree</p>
                <br></br>
                <p>Rs. 3400</p>
              </div>
              <div><FavoriteBorderIcon/>
              </div>
              
            </div>
            <div>
              <br></br>
            <button className="cart-button">Add to Cart <span><ShoppingCartIcon/></span></button>
            
            </div>
          </div>
          <div>
          <img src={handbag}></img>
            <div  className="flex-car">
              <div>
                <p>Navy Blue crepe</p>
                <p>Kashmiri Hand</p>
                <p>Emboroidery Saree</p>
                <br></br>
                <p>Rs. 3400</p>
              </div>
              <div><FavoriteBorderIcon/>
              </div>
              
            </div>
            <div>
              <br></br>
            <button className="cart-button">Add to Cart <span><ShoppingCartIcon/></span></button>
            
            </div>
          </div>
          <div>
          <img src={handbag}></img>
            <div  className="flex-car">
              <div>
                <p>Navy Blue crepe</p>
                <p>Kashmiri Hand</p>
                <p>Emboroidery Saree</p>
                <br></br>
                <p>Rs. 3400</p>
              </div>
              <div><FavoriteBorderIcon/>
              </div>
              
            </div>
            <div>
              <br></br>
            <button className="cart-button">Add to Cart <span><ShoppingCartIcon/></span></button>
            
            </div>
            
          </div>
          <div>
          <img src={handbag}></img>
            <div  className="flex-car">
              <div>
                <p>Navy Blue crepe</p>
                <p>Kashmiri Hand</p>
                <p>Emboroidery Saree</p>
                <br></br>
                <p>Rs. 3400</p>
              </div>
              <div><FavoriteBorderIcon/>
              </div>
              
            </div>
            <div>
              <br></br>
            <button className="cart-button">Add to Cart <span><ShoppingCartIcon/></span></button>
            
            </div>
          </div>
        </Slider>
         </div>
        
    </div>
   
  );
}