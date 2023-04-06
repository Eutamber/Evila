import { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../ProductContext";

function Products() {
    const { products: allProducts, error } = useContext(ProductContext);
    const [products, setProducts] = useState([]);    
    const defaultProductFilter = "All";
    

    useEffect(() => {
        fetchProducts(defaultProductFilter);
    }, []);

    const fetchProducts = async (productCategory) => {
        if (productCategory !== defaultProductFilter) {
            const filteredProduct = allProducts.filter(({ category }) => { return category === productCategory });
            setProducts(filteredProduct);
            
        }
        else {
            setProducts(allProducts);
        }
    };

   
    

    return (
        <>
            <div class="container align-items-center filter">
            
            </div>
            <div class="col-12 col-sm-12 col-md d-flex flex-wrap align-items-center">
                {products.map((product) => {
                    return <ProductCard product={product} key={product.id} />
                })}
            </div>
        </>
    );
}

export default Products;