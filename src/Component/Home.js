import Products from "./Products";

function Home (){
    return(
     <div className='hero'>
        <div className="card text-bg-dark border-0">
        <img src="/assets/bg.jpg" className="card-img border-0" alt="bacground-img" height="600px"/>
        <div className="card-img-overlay ">
            <div>
            <h5 className="card-title display-3 fw-bolder mb-0 pt-4">NEW SEASON ARRIVALS</h5>
            <p className="card-text fs-2">CHECK OUT ALL THE TRENDS</p>
            <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
        {/* <Products/> */}
</div>
   
    
    )
}
export default Home;