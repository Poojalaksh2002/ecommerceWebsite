import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar (){
  const cartState = useSelector((state)=>state.reducer)
  
    return(
    <div>
        <nav className ="navbar navbar-expand-lg navbar-dark bg-info py-3 shadow-sm" data-bs-theme="dark">
    <div className="container">
    <Link className="navbar-brand fw-bold fs-2" href="/" >LA Collection</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={`/`} activeClassName="current" className="nav-link active fw-bold fs-5">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={`/products`} activeClassName="current" className="nav-link active fw-bold fs-5">Products</Link>
        </li>
        <li className="nav-item">
          <Link to={`/about`} activeClassName="current" className="nav-link active fw-bold fs-5">About</Link>
        </li>
        <li className="nav-item">
          <Link to={`/contact`} activeClassName="current" className="nav-link active fw-bold fs-5">Contact</Link>
        </li>
      </ul>
      <div className="buttons">
        <Link to={'/login'} className="btn btn-outline-dark">
          <i className="fa fa-sign-in me-2">Login</i></Link>
        <Link href="/register" className="btn btn-outline-dark ms-2">
          <i className="fa fa-sign-in me-2">Register</i></Link>
        <Link to="/cart" className="btn btn-outline-dark ms-2">
          <i className="fa-solid fa-cart-shopping me-1">Cart({cartState.length})</i></Link>
      </div>
    </div>
  </div>
</nav>
</div>
    )
}
export default Navbar;