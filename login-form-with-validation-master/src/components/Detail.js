import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";
import { ProductContext } from "../ProductContext";

import PageNotFound from "./PageNotFound";
import DateRangeComp from "./DateRangeComp";
import Favor from "./Favor";
import './Favor.css';




function Detail() {
    const { cart, addProductToCart, error } = useContext(CartContext);
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQty] = useState([1]);
    const [color, setColor] = useState("");
    
      

    useEffect(() => {
        const fetchFilteredProduct = async () => {
            // If there are no items in the cart, get the details from the database.
            if (cart.length === 0) {
                const filteredProduct = products.filter((p) => { return p.id === parseInt(id) });
                setProduct(filteredProduct[0]);
            }                             

            else {
                //If item already added to cart then pull it out and populate quantity field.
                //This is when user wants to edit the product added to cart.
                const p = cart.filter((c) => { return c.product.id === parseInt(id) });
                if (p.length > 0) {
                    setProduct(p[0].product);
                    setQty(p[0].qty);
                    setColor(p[0].color);
                                        
                }
                else {
                    //If product have not been added to cart yet, get details from database.
                    const filteredProduct = products.filter((p) => { return p.id === parseInt(id) });
                    setProduct(filteredProduct[0]);
                }
            }
  

        };
        fetchFilteredProduct();
        document.getElementById('qty').select();
    }, []);
     
    if (error) throw error;
    if (!product) return <PageNotFound />
    


    return (
        <>
            {product &&
                <div className="box">                    
                    <img class="img" src={`/images/${product.photo}`} />                    
                    <div className="box-text">
                        <h2>{product.name}</h2>                  
                        <div className="text">{product.description}</div>
                        <div class="text">Best Price:</div>                            
                        {product.price} BATH /-{product.unit}
                        
                        <div class="text">Quantity:  
                        <input className="input" id="qty" type="text" value={quantity} onChange={(e) => setQty(e.target.value)}/>
                            {product.day}                        
                        </div>
                        {product.text}
                        {product.dayto && <DateRangeComp/> }                                                 
                        <div class="text">Colors:
                        <select id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                                    <option >color</option>
                                    {product.colors && product.colors.map((cr) => (
                                        <option key={cr.colorid} value={cr.color}>
                                            {cr.color}
                                        </option>
                                    ))}
                        </select>
                        
                        <div className="text">                          
                        <a class="btn btn-outline-dark" onClick={() => addProductToCart(quantity, color, product)}>Add to cart </a>
                        </div>                        
                        </div>
                        
                        <Favor className="display"/>
                               
                                                                   
                        </div>  
                                        
                    
                                               
                        
                    </div>
                
            }

        </>
    );
}






export default Detail;