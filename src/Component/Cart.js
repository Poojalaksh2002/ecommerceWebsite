 import { useSelector, useDispatch } from "react-redux"
 import { addCart, delCart,removeItem } from "../Redux/action"
import Product from "./Product"

 function Cart(){
    const dispatch = useDispatch()
    const state = useSelector((state)=> state.reducer)

   // const amount = Math.max(Product.qty * Product.price, Product.price);
  
    const handlePlus = (Product)=>{
        dispatch(addCart(Product))
    }

    const handleMinus = (Product) => {
        dispatch(delCart(Product))
    }
    const handleClose = (Product)=>{
        dispatch(removeItem(Product))
    }

    const cartItems = (Product) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={Product.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(Product)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4 ">
                            <img src={Product.image} alt={Product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3 className="mb-4">{Product.title}</h3>
                            <p className="lead fw-bold mb-4">{Math.max(1,Product.qty)} X ${Product.price} = ${Math.max((Product.price),Product.qty * Product.price)}</p>
                            <button className="btn btn-outline-dark text-centre fs-4 me-3 px-4 mx-3 " onClick={()=>handlePlus(Product)}>+</button>
                            <button className="btn btn-outline-dark text-centre fs-4 me-3 px-4 " onClick={()=>handleMinus(Product)}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <a to="/checkout" href="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</a>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}
    

export default Cart