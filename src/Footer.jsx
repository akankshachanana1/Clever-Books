import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo1 from "./Images/logo1.png";

import { faTwitter,faInstagram,faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer=()=>{
    return(
        [
<div className="foot" style={{padding: '100px' }}>
<div className="container">
  <div className="row">
    <div className="col-6 text-center foot1 ">
    <a class="navbar-brand" href="/" style={{ color: 'white' }}> <h1><img src={logo1} width="70" height="70" /> CleverBooks</h1></a>
    <p className="text-white text-center">Clever Books is an AI-powered supply chain software that provides companies tools for demand forecasting, <br></br>inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
   
    </div>
    <div className="col-6 text-center text-white foot2">
<h1> Contact Clever Books</h1>
<p>
sales@getcrest.ai
<br></br>
Registered Office:
1507, Incubex, 11th cross road,
<br>

</br> 
19th Main Road, Bengaluru, 
<br>

</br>
India. 560102
Corporate Office:
291, All Time Space, 4th Floor,
15th A Cross, Sector - 6,
HSR Layout, Bengaluru,
India. 560102</p>
<p>
Corporate Office:
291, All Time Space, 4th Floor,
<br></br>
15th A Cross, Sector - 6,
<br></br>
HSR Layout, Bengaluru,
<br></br>
India. 560102
</p>
    </div>
  </div>
 <div className="text-center foot-3"> <a href="https://twitter.com/Get_Crest"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '2em', color: '#1DA1F2' }} /></a><a href="https://www.facebook.com/getcrest">
                    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '2em', color: '#1877F2', margin: '0 10px' }} />
                    </a><a href="https://www.instagram.com/getcrest/?hl=en"> <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '2em', color: '#C13584', margin: '0 10px' }} /></a><a href="https://www.linkedin.com/company/get-crest/">  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '2em', color: '#0A66C2', margin: '0 10px' }} /></a></div>
</div>
</div>
        ]
    )
}
export default Footer;
