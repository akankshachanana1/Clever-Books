import logo1 from "./Images/logo1.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#151218", padding: "10px", overflow: "visible" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{ color: 'white' }}>
                    <img src={logo1} alt="CleverBooks Logo" width="70" height="70" /> CleverBooks
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" >
                     
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Industry</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Customer Stories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a className="me-3" id="login">Login</a>
                        <button type="button" className="btn btn-light ml-2" style={{ borderColor: "black", borderRadius: "25px" }} id="talk">Talk to Us</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
