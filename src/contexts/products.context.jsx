import { createContext, useContext, useState } from "react";
import PRODUCTS from "../shop-data.json"
const ProductContext = createContext({
    products:[]
});

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS)
    const value = {products, setProducts}
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

const useProductsContext = ()=>{
    return useContext(ProductContext)
}

export {ProductsProvider,useProductsContext};
