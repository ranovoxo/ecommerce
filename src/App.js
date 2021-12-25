import React, { useState, useEffect } from 'react'
import {Products, Navbar} from './components';
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
       const { data } = await commerce.products.list(); // api call to fetch products
        
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts(); //hook to call fetch products function
    }, []);

    console.log(products);
    return (
        <div>
            <Navbar />
            <Products products={products} />   
        </div>
    )
}

export default App
