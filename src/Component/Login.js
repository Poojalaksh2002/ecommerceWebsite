function Login (){
    const handleClick=(event)=>{
        event.preventDefault();
    }
    return(
     <div className="d-flex justify-content-center">
<form>
    <div className="border border-1 mt-5 px-5 pb-5 shadow p-3 mb-5 bg-body-tertiary rounded">
    <h1 className="h3 mt-4 fw-normal">Please sign in</h1>
    <div className="col-sm-12 mt-4 text-start">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="text" className="form-control mt-1" id="email" placeholder="" value="" required=""/>
              <div className="invalid-feedback">
                Valid email is required.
              </div>
            </div>
            <div className="col-sm-12 mt-4 text-start">
              <label for="password" className="form-label">Password</label>
              <input type="text" className="form-control mt-1" id="password" placeholder="" value="" required=""/>
              <div className="invalid-feedback">
                Valid Password is required.
              </div>
            </div>

    <div className="checkbox mt-4 mb-4 ">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" onClick={handleClick} type="submit">Sign in</button>
    </div>
     </form>
     </div>
    )
}
export default Login;