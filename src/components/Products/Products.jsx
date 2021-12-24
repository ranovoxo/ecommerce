import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import runners from './images/running1.jpeg';
import macbook from './images/macbook1.jpeg'
import useStyles from './styles';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: runners},
    {id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10', image: macbook},
];

const Products = ()=> {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing= {4}>
                {products.map((product) => (   //loop through our products ß
                    <Grid item key = {product.id} xs ={12} sm={6} md={4} lg= {3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;