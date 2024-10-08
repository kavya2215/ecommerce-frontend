import React, { useState, useEffect } from 'react';
import './Products.css'; // Assuming your CSS file is correctly placed

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Sample product data with dynamic PUBLIC_URL for images
        setProducts([
            { _id: '1', name: 'Product 1', price: 29.99, image: `${process.env.PUBLIC_URL}/images/product1.jpg` },
            { _id: '2', name: 'Product 2', price: 39.99, image: `${process.env.PUBLIC_URL}/images/product2.jpg` },
            { _id: '3', name: 'Product 3', price: 49.99, image: `${process.env.PUBLIC_URL}/images/product3.jpg` },
            { _id: '4', name: 'Product 4', price: 19.99, image: `${process.env.PUBLIC_URL}/images/product4.jpg` },
            { _id: '5', name: 'Product 5', price: 59.99, image: `${process.env.PUBLIC_URL}/images/product5.jpg` },
            { _id: '6', name: 'Product 6', price: 79.99, image: `${process.env.PUBLIC_URL}/images/product6.jpg` },
            { _id: '7', name: 'Product 7', price: 89.99, image: `${process.env.PUBLIC_URL}/images/product7.jpg` },
            { _id: '8', name: 'Product 8', price: 99.99, image: `${process.env.PUBLIC_URL}/images/product8.jpg` },
            { _id: '9', name: 'Product 9', price: 109.99, image: `${process.env.PUBLIC_URL}/images/product9.jpg` },
            { _id: '10', name: 'Product 10', price: 119.99, image: `${process.env.PUBLIC_URL}/images/product10.jpg` },
        ]);
    }, []);

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <div className="products-container">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p><strong>ID:</strong> {product._id}</p>
                            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                            <button className="buy-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;