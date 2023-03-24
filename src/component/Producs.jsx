import React, {useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';

export default function () {

    const [data,setData] = useState([])
    const [filter,setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let cpnMount = true;

    useEffect(
        ()=>{
        const getProducts = async() =>{
            setLoading(true);
            const res = await fetch("https://fakestoreapi.com/products");
            if(cpnMount){
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
            }
            return ()=>{
                cpnMount = false;
            }
        }
        getProducts();
        },[]
    );

    const Loading =()=>{
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }
    const fitterProduct =(cat)=>{
        const update = data.filter((index)=>index.category === cat);
        setFilter(update)
    }
    const ShowProducts =()=>{
      return (
        <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>ALL</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>fitterProduct("men's clothing")}>men clothing</button>
            <button className="btn btn-outline-dark me-2"onClick={()=>fitterProduct("women's clothing")} >women clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>fitterProduct("jewelery")} >Jewelry</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>fitterProduct("electronics")} >Electtronic</button>
        </div>
        {filter.map((product)=>{
            return (
                <>
                <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                <img src={product.image} class="card-img-top" alt={product.titel} height="250px"/>
                <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p class="card-text">
                        ${product.price}
                    </p>
                    <a href="" class="btn btn-outline-dark">Buy Now</a>
                </div>
                </div>
                </div>
                </>
            )
        })}
        </>
      )
    }

  return (
    <div>   
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='text-center'>LIST PRODUCTS</h1>
                    <hr/>
                </div>
           
            </div>
            <div className="row justify-content-center text-center ">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  )
}
