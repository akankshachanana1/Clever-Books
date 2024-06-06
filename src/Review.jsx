import Samosa from "./Images/Samosa.jpeg"
const Review=()=>{
    return(
        [
            <div className="rev" style={{height:"500px"}}>
<div className="container">
<h1 className="text-center text-white" style={{fontSize:"50px"}}>Reviews</h1>
<div className="row pt-5 pb-5">
    <div className=" col-7">

        <img src={Samosa} width="500px" style={{borderRadius:"25px"}}  />

    </div>
    <div className="col-5">
        <h1 className="text-center text-white">Samosa party</h1>
        <p className=" text-white">“By implementing Clever Books, all planning-related decisions have been accurately and consistently automated, resulting in a 95% fill rate.”
<br></br>
<sub>~ Ratnesh Thakur, Technology Lead</sub></p>
    </div>

</div>

<div className=" text-white review"> many more to come... </div>

</div>
</div>
        ]
    )
}

export default Review;