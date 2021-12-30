import React, { useState, useEffect } from 'react'
import {Products, Navbar, Cart, Checkout} from './components';
import { commerce } from './lib/commerce';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
       const { data } = await commerce.products.list(); // api call to fetch products
        
        setProducts(data);
    }
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }
    const handleAddToCart = async (product_id, quantity ) => {
        const { cart } = await commerce.cart.add(product_id, quantity);
        setCart(cart); 
    }

    const handleUpdateCartQty = async (product_id, quantity) => {
        const { cart } = await commerce.cart.update(product_id, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (product_id, quantity) => {
        const { cart } = await commerce.cart.remove(product_id, { quantity });

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    useEffect(() => {
        fetchProducts(); //hook to call fetch products function
        fetchCart();
    }, []);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items}/>
                <Routes>
                    <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart}/>}></Route>
                    <Route exact path = "/cart" element= {<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>}> 
                    </Route>
                    <Route exat path="/checkout" element={ <Checkout cart ={cart} />}> </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
