import { Link } from "react-router-dom";


export const Nav = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">ReactPractise</Link>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/home"> Home</Link>
            <Link className="nav-item nav-link" to="/product">Product</Link>
            <Link className="nav-item nav-link" to="/product/create">Create</Link>
            <Link className="nav-item nav-link disabled" to="#">Disabled</Link>
          </div>
        </div>
      </nav>
    
  );
};
