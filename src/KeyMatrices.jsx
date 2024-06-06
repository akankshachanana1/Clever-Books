import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHandHoldingDollar, faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const KeyMatrices = () => {
    const [fontSize, setFontSize] = useState("40px");
    const [activeItem, setActiveItem] = useState("stockouts");

    const changeFontSize = (newSize, item) => {
        setFontSize(newSize);
        setActiveItem(item);
    };

    return (
        <div style={{ backgroundColor: "#151218",height:"550px",paddingTop:"100px",paddingLeft:"40px" }} className="mt-4">
            <div className="row pt-5 matrices">
                <div className="col-4">
                    <div id="list-example" className="list-group">
                        <a className=" mb-5" onClick={() => changeFontSize("80px", "stockouts")}>
                            <FontAwesomeIcon icon={faCartShopping}  className="awe" style={{ fontSize: "50px",color:"white" }} /> <span className="some1" style={{ fontSize: "30px" }}> Stockouts</span>
                        </a>
                        <a className="  mb-5" onClick={() => changeFontSize("100px", "cashRecovery")}>
                            <FontAwesomeIcon icon={faHandHoldingDollar} className="awe" style={{ fontSize: "50px",color:"white" }} /> <span className="some1"  style={{ fontSize: "30px" }}>Cash Recovery Cycle</span>
                        </a>
                        <a className=" mb-5" onClick={() => changeFontSize("120px", "revenue")}>
                            <FontAwesomeIcon className="awe" icon={faMagnifyingGlassDollar} style={{ fontSize: "50px",color:"white" }} /><span className="some1"  style={{ fontSize: "30px" }}>Revenue</span>
                        </a>
                    </div>
                </div>
                <div className="key col-8 mt-5 text-center">
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                        {activeItem === "stockouts" && (
                            <div className="mb-5 text-center some">
                                <h4 id="list-item-1" style={{ fontSize: fontSize }}>85%</h4>
                                <p>Reduction in out-of-stock</p>
                            </div>
                        )}
                        {activeItem === "cashRecovery" && (
                            <div className="mb-5 some">
                                <h4 id="list-item-2" style={{ fontSize: fontSize }}>25 Days</h4>
                                <p>Reduction in cash recovery time</p>
                            </div>
                        )}
                        {activeItem === "revenue" && (
                            <div className="mb-5 some">
                                <h4 id="list-item-3" style={{ fontSize: fontSize }}>15%</h4>
                                <p>Growth in revenue</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyMatrices;
