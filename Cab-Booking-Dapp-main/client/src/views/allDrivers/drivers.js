// import React, { useEffect, useState } from "react";

// export default function ProductList() {

//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         getProducts();
//     }, [])

//     const getProducts = async () =>{
//         let result = await fetch("http://localhost:3000/alldrivers");
//         result = await result.json();
//         setProducts(result);
//     }
//     console.warn("products", products);


//     return (
//         <div className="Drivers-list">
//             <h3>All Drivers List</h3>
//             <ul>
//                 <li>S.no</li>
//                 <li>Name</li>
//                 <li>Price</li>
//                 <li>contact</li>
//                 <li>Car No</li>
//                 <li>NO of Seats</li>
//                 {/* <li>Company</li> */}
//             </ul>

//             {
//                 products.map((item, index) =>
//                     <ul>
//                         <li>{index + 1}</li>
//                         <li>{item.name}</li>
//                         <li>{item.email}</li>
//                         <li>{item.contact}</li>
//                         <li>{item.carNo}</li>
//                         <li>{item.noOfSeats}</li>
//                     </ul>

//                 )
//             }
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";
import './drivers.css';
import { Button } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


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
        // <div className="Drivers-list">
        //     <h3>All Drivers List</h3>
        //     <ul >
        //         <li>S.no</li>
        //         <li>Name</li>
        //         <li>Price</li>
        //         <li>contact</li>
        //         <li>Car No</li>
        //         <li>NO of Seats</li>
        //         {/* <li>Company</li> */}
        //     </ul>

            // {
            //     products.map((item, index) =>
            //         <ul>
            //             <li>{index + 1}</li>
            //             <li>{item.name}</li>
            //             <li>{item.email}</li>
            //             <li>{item.contact}</li>
            //             <li>{item.carNo}</li>
            //             <li>{item.noOfSeats}</li>
            //         </ul>

            //     )
            // }
        // </div>


        <Card>
              <CardHeader color="primary">
                <h4 >Driver List</h4>
                
              </CardHeader>
              <CardBody>
        <table className="Drivers-list">
          <thead className="Drivers-list-head">
            <tr className="Drivers-list-main">
              <th>Index</th>
              <th>Name</th>
              <th>Price</th>
              <th>Contact</th>
              <th>Car number</th>
              <th>Number of seats</th> 
              <th>Book</th>
            </tr>

          </thead>
          <tbody>

            {
                products.map((item, index) =>
                    <tr className="Drivers-list-main">
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.carNo}</td>
                        <td>{item.noOfSeats}</td>
                        <td> <Button
                  variant="contained"
                  color="primary"
                  
                  onClick=""
                >
                  Book me
              </Button> </td>
                    </tr>

                )
            }
          </tbody>
        </table>
              </CardBody>
            </Card>



    )
}

