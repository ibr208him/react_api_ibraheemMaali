import React,{useEffect, useState} from 'react'

export default function Products() {

  let [products,setProducts]=useState([]);

 const getProducts=async()=>{
     const response= await fetch('https://fakestoreapi.com/products');
    let data=await response.json();
    console.log(data);
    setProducts(data);
    }

  useEffect(()=>{
    getProducts();
  },[]);

  return (
<div className='row'>
 {
 products.map((product)=>{
return <div className='col-md-4' key={product.id}>
  <h2>{product.title}</h2>
  <img src={product.image} alt="product-img" className='w-100' />
</div>
 })
}
 </div>
  )
}
