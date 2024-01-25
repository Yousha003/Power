import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    setLoading(true);

    const getProducts = async () => {
      const res = await axios.get(
        `https://js2-ecommerce-api.vercel.app/api/products/${id}`);
      setProduct(res.data);
      setLoading(false);
        
    };
    getProducts();
   
  }, []);

  return(
    <div>
    { loading && <p>Loading..</p> }
    {
    product && (
      
      <div className="details">
       
        <div className="image-containerdetails">
        </div>
        <div className="small-image-containerdetails">
        <img src={product.images[0]} alt={product.images} />
        <img src={product.images[1]} alt={product.images} />
        <img src={product.images[2]} alt={product.images} />
        {/* <img src={product.images[3]} alt={product.images} /> */}

         
        </div>
        
        <p className="product-name">
        { product?.name } 
        </p>

        <p className="product-description">
          { product?.description }
        </p>
        
        <p className="product-price">
        { product?.price}:-
        </p>
        <NavLink to="/cart"> 
        <button className="buy-btn" >Lägg till i korgen</button> 
        </NavLink>
      </div>
  )
    } 
  </div>
  )
    

}
export default ProductDetails;
