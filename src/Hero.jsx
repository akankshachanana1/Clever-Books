import Hero1 from "./Images/Hero1.png";
import Hero2 from "./Images/Hero2.png";
import './index.css';

const Hero = () => {
    return (
        <div style={{backgroundColor:"#151218"}}>
        <div className="container text-center">
            <div className="row align-items-center">
                <div className="col-5 d-flex justify-content-center">
                    <h1 className="hero-heading"><span id="heading">Precision</span> in Every Parcel.
                    <br></br>
                    <p style={{fontSize:"20px"}}>
                    CleverBooks—Where Supply Meets Demand and Growth Flourishes!</p>
                    <br></br>
                    <br />
                    <div className="row">
                    <div className="col-6">
                    <button className="bttn">Get started <span id="btn"> with Clever Books</span></button></div>
                    <div className="col-6">
                    <img className="image" src={Hero2}/></div></div>
                    </h1>
                 
                </div>
                <div className="col-7">
                    <img  src={Hero1} className="hero1" alt="Hero" />
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Hero;
