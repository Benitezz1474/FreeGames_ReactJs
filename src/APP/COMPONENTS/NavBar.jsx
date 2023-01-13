import { NavLink } from "react-router-dom"

export const NavBar=()=>{

    return<nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/home"> LogoPro</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Options</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">Search Game</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="list">Game List</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="">Logout</NavLink>
            </li>
            
          </ul>
          
        </div>
      </div>
    </div>
  </nav>
}