
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/js/dist/collapse';
import { useState } from "react";

function Navbar() {
    
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.pageYOffset=0; // For mobile
};

    function chiudi () {
        document.getElementById('menu-btn').checked = false;
    }


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none"><img src="img/logo_cv.png" alt="logo cv" /></span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/Fotoprofilo2.jpg" alt="foto profilo" />
                    </span>
                </a>
                <input type="checkbox"  id="menu-btn" />
                <label htmlFor="menu-btn" className="menu-icon">
                    <span className="nav-icon"></span>
                </label>
  
                <div className="navbar-collapse " id="menu">
                    <ul  id="ul">
                        <li className="nav-item " onClick={() => {chiudi();topFunction()}}>
                            <Link className="nav-link js-scroll-trigger"  to="/">Profilo</Link>
                        </li>
                        <li className="nav-item" onClick={() => {chiudi();topFunction()}} >
                            <Link className="nav-link js-scroll-trigger" to="esperienze">ESPERIENZE</Link>
                        </li>
                        <li className="nav-item" onClick={() => {chiudi();topFunction()}}>
                            <Link className="nav-link js-scroll-trigger" to="istruzione">ISTRUZIONE E FORMAZIONE</Link>
                        </li>
                        <li className="nav-item" onClick={() => {chiudi();topFunction()}}>
                            <Link className="nav-link js-scroll-trigger" to="skills">Competenze Digitali</Link>
                        </li>
                        <li className="nav-item" onClick={() => {chiudi();topFunction()}}>
                            <Link className="nav-link js-scroll-trigger" to="hobby">HOBBY</Link>
                        </li>
                        <li className="nav-item" onClick={() => {chiudi();topFunction()}}>
                            <Link className="nav-link js-scroll-trigger" to="altrecompetenze">ALTRE COMPETENZE</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />

        </>
    )
};
export default Navbar;