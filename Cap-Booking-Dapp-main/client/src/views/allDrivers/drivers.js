import React, { useEffect, useState } from "react";

export default function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () =>{
        let result = await fetch("http://localhost:3000/alldrivers");
        result = await result.json();
        setProducts(result);
    }
    console.warn("products", products);


    return (
        <div className="Drivers-list">
            <h3>All Drivers List</h3>
            <ul>
                <li>S.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>contact</li>
                <li>Car No</li>
                <li>NO of Seats</li>
                {/* <li>Company</li> */}
            </ul>

            {
                products.map((item, index) =>
                    <ul>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                        <li>{item.contact}</li>
                        <li>{item.carNo}</li>
                        <li>{item.noOfSeats}</li>
                    </ul>

                )
            }
        </div>
    )
}

