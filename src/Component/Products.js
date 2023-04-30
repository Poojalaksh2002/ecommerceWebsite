import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Products(){
    const [data, setdata] = useState([])
    const [filter, setfilter]= useState(data)
    const [loading, setloading]= useState(false);
    let componentMounted = true;

    useEffect(()=>{
        const getProducts=async()=>{
            setloading(true)
        const response = await axios.get('https://fakestoreapi.com/products')             

        if(componentMounted){
            setdata(response.data)
            console.log(response.data)
            setfilter(response.data)
            console.log(filter)
            setloading(false)
        }
        return ()=>{
            componentMounted = false
        }
        }
       getProducts();   
    },[])

    const Loading=()=>{
        return <>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
        </>
    }
    const filterProduct=(category)=>{
        const updatedProduct = data.filter((list)=>list.category===category)
        setfilter(updatedProduct)
    }
    const ShowProducts=()=>{
        return(
            <>
              <div className='buttons my-5 mt-2'>
            <button className='btn btn-outline-dark me-2 px-5' onClick={()=>setfilter(data)}>All</button>
            <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
            <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("women's clothing")}>Womens Clothing</button>
            <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("jewelery")}>Jewellery</button>
            <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("electronics")}>Electronics</button>
              </div>
            {
                filter.map((product=>{
                    return(
                        <>
                        <div className='col-md-3 mb-4 '>
                        <div className="card h-100 text-center p-10 " key={product.id} >
                        <img src={product.image} className="card-img-top mx-2 my-3" alt={product.title} style={{width: "15rem" ,height: "18rem"}}/>
                        <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                        <p className="card-text lead fw-bold">${product.price}</p>
                        <a href={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</a>
                        </div>
                        </div>
                        </div>
                        </>
                    )
                }))
            }
            </>
        )
    }
    return(
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr/>
                    </div>
                </div>
                <div className='row justify-content-centre'>
                    {loading ? <Loading/> :<ShowProducts/>}
                </div>
            </div>
        </div>
    )
}
export default Products;