
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/js/dist/collapse';

function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    {/* <span className="d-block d-lg-none"><i className="fa fa-angle-up"></i></span> */}
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/Fotoprofilo2.jpg" alt="" />
                    </span>
                </a>
                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label htmlFor="menu-btn" className="menu-icon">
                    <span className="nav-icon"></span>
                </label>
  
                <div className="navbar-collapse" id="menu">
                    <ul className="navbar-nav menu">
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/">Profilo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="esperienze">ESPERIENZE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="istruzione">ISTRUZIONE E FORMAZIONE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="skills">Competenze Digitali</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="hobby">HOBBY</Link>
                        </li>
                        <li className="nav-item">
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