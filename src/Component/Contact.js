export const Contact=()=>{
    return(
        <div >
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 text-center  mt-5">
                    <h1>Have Some Question?</h1>
                </div>
            </div>
            <div className="row">
            <div className="d-flex justify-content-center">
                    <form >
                        <div className="border border-1 mt-4 px-5 pb-5 shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="col-sm-12 text-start mb-3">
                            <label for="exampleForm" className="form-label">Full Name</label>
                            <input type="text" className="form-control px-5" id="exampleForm" placeholder="John Smith"/>
                        </div>
                        <div className="col-sm-12 text-start mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                            <div className="col-sm-12 text-start mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Send Message</button>
                            </div>
                    </form>
                </div>
                </div>
                </div>
            </div>
    )
}