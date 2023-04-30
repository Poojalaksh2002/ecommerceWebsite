import { useSelector } from "react-redux";

function Navbar (){
  const cartState = useSelector((state)=>state.reducer)
  
    return(
    <div>
        <nav className ="navbar navbar-expand-lg navbar-dark bg-info py-3 shadow-sm" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand fw-bold fs-2" href="/">LA Collection</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active fw-bold fs-5" aria-current="page" href='/'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bold fs-5" href="/products">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold fs-5" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold fs-5" href="/contact">Contact</a>
        </li>
      </ul>
      <div className="buttons">
        <a href="/login" className="btn btn-outline-dark">
          <i className="fa fa-sign-in me-2">Login</i></a>
        <a href="/register" className="btn btn-outline-dark ms-2">
          <i className="fa fa-sign-in me-2">Register</i></a>
        <a href="/cart" className="btn btn-outline-dark ms-2">
          <i className="fa-solid fa-cart-shopping me-1">Cart({cartState.length})</i></a>
      </div>
    </div>
  </div>
</nav>
</div>
    )
}
export default Navbar;