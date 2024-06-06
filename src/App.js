import Navbar from "./Navbar";
import Hero from "./Hero";
import ProblemsSolved from "./ProblemsSolved";
import KeyMatrices from "./KeyMatrices";
import './index.css';
import Review from "./Review";
import Features from "./Features";
import Footer from "./Footer";
import Cta from "./Cta";
const App=()=>{
  return(
    [
<Navbar/>,
<Hero />,
<ProblemsSolved />,
<KeyMatrices />,
<Review />,
<Features />,


<Cta />,
<Footer />
    ]
  )
}

export default App;
