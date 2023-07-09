import React, { useState } from 'react'
import AddProducts from '../AddProducts';
import ProductList from '../ProductList';

export default function Products(){

    const [products, setProducts] = useState([]);

    const submit = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const price = event.target.price.value;
        const product = { title, price };
        setProducts([...products, product]);
        console.log(product);
        event.target.reset();
    }

    return(
        <div>
            <AddProducts submit={submit} />
            <ProductList products={products} />
        </div>
    );
}