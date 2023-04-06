import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router';
import {TbCurrencyBaht } from "react-icons/tb";
function ProductCard(props) {
    const navigate = useNavigate();   

    return (
        <>
            {/*  */}
            <div class="m-2 card">
                <img class="card-img-top  img-thumbnail align-self-center" src={`/images/${props.product.photo}`} alt="Card image cap" onClick={(evt) => { navigate(`/product/${props.product.id}`) }} />
                <div class="card-body">
                    <h5 class="card-title d-flex justify-content-center">{props.product.name}</h5>
                    <h8 class="card-title">{props.product.price}/-<TbCurrencyBaht/></h8>                                       
                </div>
            </div>            
        </>
    );
}

export default ProductCard; 