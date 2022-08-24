import { useState } from "react"
import { BsBagDash } from "react-icons/bs";
import { FaRegHeart} from "react-icons/fa";
import { FaCalendarAlt} from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaRegGem} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Footer from "layout/userLayoute/footer/index";
import NavBar from "layout/userLayoute/navbar/index";
import pic2 from "assets/images/kerempodr-inlay.jpg";

import "./aboutProduct.css"

const AboutProduct = () => {
    const [counter, setCounter] = useState(0);

// counter
   const increase = () => {
    setCounter(count => count + 1);};

   const decrease = () => {
    setCounter(count => count - 1);
    if(counter < 1){
        setCounter(0)
    }
};


  return (
    <>
    <NavBar />

      <div className='about-main'>
        <div className='d-flex'>
            <div className="about-img-contain">
                <img src={pic2} alt="product-img" className="about-img"/>
                
            </div>
            <div className="about-contain">
                <h1>name of product</h1>
                <hr/>
                <li>product information</li>
                <li>product information</li>
                <li>product information</li>
                <li>product information</li>
                <li>product information</li>
                <h5>قیمت :320,000 تومان </h5>
                
                <div className="d-flex about-button">
                    <Button variant="secondary" className="btn-add-about">
                    افزودن به سبد خرید
                    <BsBagDash style={{fontSize: "1.3rem", marginRight: "0.5rem"}}/>
                    </Button>
                    <div className="btn-counter-main">
                        <button className="btn-counter-about" onClick={increase}>+</button>
                        <span className="counter__output">{counter}</span>
                        <button className="btn-counter-about" onClick={decrease}>-</button>
                    </div>
                    <div className="icon-heart-main">
                        <FaRegHeart className="icon-heart-about"/>
                    </div>
                </div>
                <hr/>
                <div className="icons-about-footer">
                    <div className="d-flex"> 
                        <FaRegGem className="i-about"/>
                        <p style={{marginRight: "1rem", color: "#666666"}}>ضمانت اصل بودن کالا</p>
                    </div>
                    <div className="d-flex">
                        <FaCalendarAlt className="i-about"/>
                        <p style={{marginRight: "1rem", color: "#666666"}}>هفت روز ضمانت بازگشت</p>
                    </div>
                    <div className="d-flex">
                        <FaCreditCard className="i-about"/>
                        <p style={{marginRight: "1rem", color: "#666666"}}>پرداخت درب محل</p>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    <Footer />
  </>
  )
}

export default AboutProduct