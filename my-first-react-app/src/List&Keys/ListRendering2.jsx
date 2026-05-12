import React from 'react'

const ListRendering2 = () => {
    const products = [
    {
      id: 101,
      name: "Wireless Mouse",
      price: 25.99,
      category: "Electronics",
      inStock: true,
    },
    {
      id: 102,
      name: "Mechanical Keyboard",
      price: 89.49,
      category: "Electronics",
      inStock: true,
    },
    {
      id: 103,
      name: "Yoga Mat",
      price: 19.99,
      category: "Fitness",
      inStock: false,
    },
    {
      id: 104,
      name: "Coffee Maker",
      price: 45.0,
      category: "Kitchen",
      inStock: true,
    },
    {
      id: 105,
      name: "Running Shoes",
      price: 120.0,
      category: "Apparel",
      inStock: true,
    },
    {
      id: 106,
      name: "Bluetooth Headphones",
      price: 55.0,
      category: "Electronics",
      inStock: false,
    },
    {
      id: 107,
      name: "Stainless Steel Bottle",
      price: 15.75,
      category: "Home",
      inStock: true,
    },
    {
      id: 108,
      name: "Desk Lamp",
      price: 30.25,
      category: "Home",
      inStock: true,
    },
    {
      id: 109,
      name: "Resistance Bands",
      price: 12.99,
      category: "Fitness",
      inStock: true,
    },
    {
      id: 110,
      name: "Chef's Knife",
      price: 65.0,
      category: "Kitchen",
      inStock: false,
    },
  ];
  return (
    <div>
        <h1>Product List</h1>
        <hr />
        {products.map((product)=>{
            return <div key={product.id}>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                {/* <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p> */}
                <p>Status: {String(product.inStock)}</p>
                <button>Buy</button>
                <hr />
            </div>
        })}

    </div>
  )
}

export default ListRendering2