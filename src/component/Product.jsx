import React, {useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'

export default function Product() {
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [display,setDisplay] = useState(false);
    useEffect(
        ()=>{
        const getProduct = async() =>{
            setDisplay(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
     
                setProduct(await res.json());
                setDisplay(false);
                console.log('>> id: ', id);
            
           
        }
        getProduct();
        },[]
    );
    
    const Display = ()=>{
        return(
            <>
               <div className='text-center'>
                    Loading............
               </div>
            </>
        )
    };
    const Show = () =>{
        return(
            <>
                    <div className="col-md-6 mt-5">
                        <img src={product.image} alt={product.title} height="400px" width="400px"/>
                    </div>
                    <div className="col-md-6 mt-5">
                        <h4 className='text-uppercase text-black-50'>
                            {product.category}
                        </h4>
                        <h1 className="display-5">
                            {product.title}
                        </h1>
                        <p className="lead">
                            Rating {product.ratting && product.rating.rate}
                            <div className="fa fa-start"></div>
                        </p>
                        <h3 className='display-6 fw-bold my-4'>
                            $ {product.price}
                        </h3>
                        <p className="lead">
                            {product.description}
                        </p>
                        <button className="btn btn-outline-dark px-4 py-2">add</button>
                        <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">GO TO CART</NavLink>
                    </div>
            </>
        )
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                {display ? <Display/> : <Show/>}
            </div>
        </div>
    </div>
  )
}
