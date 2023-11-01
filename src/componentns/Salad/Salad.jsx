import React,{useEffect, useState} from 'react'

export default function Salad() {

  let [products,setProducts]=useState([]);

 const getProducts=async()=>{
     const response= await fetch('https://forkify-api.herokuapp.com/api/search?q=salad');
    let data=await response.json();
    console.log(data.recipes);
    setProducts(data.recipes);
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
  <img src={product.image_url} alt="product-img" className='w-100' />
</div>
 })
}
 </div>
  )
}
