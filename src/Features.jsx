import { useState } from "react";
import demand from "./Images/demand.png";
import workflow from "./Images/workflow.png";
import purchase from "./Images/purchase.png";
import distribution from "./Images/distribution.png";
import integeration from "./Images/integeration.png";
import dashboard from "./Images/dashboard.png";
import planning from "./Images/planning.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
    const [activeItem, setActiveItem] = useState("demand");

    const activeNess = (item) => {
        setActiveItem(item);
    };

    return (
        <div  style={{backgroundColor:"#f8f4f4"}}>
            <h1 className="text-center pt-5">Things your spreadsheet wishes it could do</h1>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <div className="feat">
                            <a id="Feat" onClick={() => activeNess("demand")}>Accurate Demand Forecasting</a>
                            {activeItem === "demand" && (
                                <div style={{marginTop:"20px"}}>
                                    <p>Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.</p>
                                    <a className="learn">Learn More <FontAwesomeIcon id="icon" icon={faArrowRight}  style={{ color: "#f3cee2" }} /></a>
                                </div>
                            )}
                        </div>
                        <div className="feat">
                            <a id="Feat" onClick={() => activeNess("workflow")}>Helix: Workflow Automation</a>
                            {activeItem === "workflow" && (
                                <div style={{marginTop:"20px"}}>
                                    <p>Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird's eye view of your supply chain, and help you do things a spreadsheet never can.</p>
                                    <a className="learn">Learn More <FontAwesomeIcon icon={faArrowRight} id="icon" style={{ color: "#f3cee2" }} /></a>
                                </div>
                            )}
                        </div>
                        <div className="feat">
                            <a id="Feat" onClick={() => activeNess("purchase")}>Automated Purchase Planning</a>
                            {activeItem === "purchase" && (
                                <div style={{marginTop:"20px"}}>
                                    <p>Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.</p>
                                    <a className="learn">Learn More <FontAwesomeIcon icon={faArrowRight} id="icon" style={{ color: "#f3cee2" }} /></a>
                                </div>
                            )}
                        </div>
                        <div className="feat">
                            <a id="Feat" onClick={() => activeNess("distribution")}>Automated Distribution Planning</a>
                            {activeItem === "distribution" && (
                                <div style={{marginTop:"20px"}}>
                                    <p>Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.</p>
                                    <a className="learn">Learn More <FontAwesomeIcon icon={faArrowRight} id="icon" style={{ color: "#f3cee2" }} /></a>
                                </div>
                            )}
                        </div>
                        <div className="feat">
                            <a id="Feat" onClick={() => activeNess("integeration")}>Easy Integration</a>
                            {activeItem === "integeration" && (
                                <div style={{marginTop:"20px"}}>
                                    <p>From all online store solutions to cloud ERPs, Crest integrates seamlessly with your current tech and ops stack. What's more? Connecting them to Crest will give you actionable insights.</p>
                                    <a className="learn">Learn More <FontAwesomeIcon icon={faArrowRight} id="icon" style={{ color: "#f3cee2" }} /></a>
                                </div>
                            )}
                        </div>
                        <div className="feat">
                            <a id="Feat" onClick={() => activeNess("dashboard")}>Custom Dashboard</a>
                            {activeItem === "dashboard" && (
                                <div style={{marginTop:"20px"}}>
                                    <p>Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.</p>
                                    <a className="learn">Learn More <FontAwesomeIcon icon={faArrowRight} id="icon" style={{ color: "#f3cee2" }} /></a>
                                </div>
                            )}
                        </div>
                        <div className="feat">
                            <a id="Feat" onClick={() => activeNess("planning")}>Consensus Planning</a>
                            {activeItem === "planning" && (
                                <div style={{marginTop:"20px"}}>
                                    <p>Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning.</p>
                                    <a className="learn">Learn More <FontAwesomeIcon icon={faArrowRight} id="icon" style={{ color: "#f3cee2" }} /></a>
                                </div>
                            )}
                        </div>
                    </ul>
                </div>
                <div className="col-6 feature">
                    <div className="text-center mt-5 mb-5">
                        {activeItem === "demand" && <img className="Img" src={demand} alt="Demand" width="600px" height="500px" style={{borderRadius:"20px"}}/>}
                        {activeItem === "workflow" && <img className="Img" src={workflow} alt="Workflow" width="600px" height="500px" style={{borderRadius:"20px"}}/>}
                        {activeItem === "purchase" && <img className="Img" src={purchase} alt="purchase" width="600px" height="500px" style={{borderRadius:"20px"}}/>}
                        {activeItem === "distribution" && <img className="Img" src={distribution} alt="purchase" width="600px" height="500px" style={{borderRadius:"20px"}}/>}
                        {activeItem === "integeration" && <img className="Img" src={integeration} alt="purchase" width="600px" height="500px" style={{borderRadius:"20px"}}/>}
                        {activeItem === "dashboard" && <img className="Img" src={dashboard} alt="purchase" width="600px" height="500px" style={{borderRadius:"20px"}}/>}
                        {activeItem === "planning" && <img className="Img" src={planning} alt="purchase" width="600px" height="500px"style={{borderRadius:"20px"}} />}
                      
                    </div>
                 
                </div>
                <a id="features">View all features</a>

                        

            </div>
        </div>
    );
}

export default Features;

