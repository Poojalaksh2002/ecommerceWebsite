import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch} from 'react-redux';
import { addCart } from "../Redux/action";
import store from "../Redux/store";
import axios from "axios"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Product (){
    const {id} = useParams()
    const [Product, setProduct] = useState([])
    const [Loading, setLoading] = useState(false)
   

    const dispatch = useDispatch();
    const addProduct =(Product)=>{
        dispatch(addCart(Product))
    }
  
      

    useEffect(()=>{
        const productShow=async()=>{
        setLoading(true)
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)             
        setProduct(response.data)
        console.log("id came")
        setLoading(false)
    }
    productShow()
},[])
 const navigate = useNavigate()

const Loadingg =()=>{
    return <>
            <div className='col-md-3'>
                <h1>Loading.........</h1>
                <Skeleton height={350}/>
            </div>
    </>
}
const ShowProduct=()=>{
    return(
    <>
     <div className="col-md-6 mt-5">
            <img className="mx-1" src={Product.image} alt={Product.title} height='400px' width='400px'></img>    
        </div>
        <div className="col-md-6 mb-10 pb-3 mx-0">
          <h4 className="text-uppercase text-start text-black-50  my-4">{Product.category}</h4>
          <h1 className="display-5 text-start">{Product.title}</h1>
          <p className="lead fw-bold text-start"><i className="fa fa-star" aria-hidden="true">Rating {Product.rating && Product.rating.rate}</i></p>
          <h3 className="diplay-10 fw-bold my-4 text-start">${Product.price}</h3>
          <p className="lead text-start">{Product.description}</p>
          <div className="text-start">
          <button className="btn btn-outline-dark fw-bolder text-uppercase text-start py-3 my-2" onClick={()=>addProduct(Product)}>Add TO Cart</button>
          <button className="btn btn-dark text-uppercase text-start p-3 mx-2" onClick={()=>navigate('/cart')}>Go TO Cart</button>
          </div>
        </div>
    </>
    )
}

    return(
        <div>
            <div className="container py-1">
                <div className="row py-1">
                   {Loading ? <Loadingg/> : <ShowProduct/> }
                </div>

            </div>
        </div>
    )
}
export default Product;