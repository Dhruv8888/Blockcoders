import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Form from "react-bootstrap/Form";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";




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




//     )
// }

// import React, { useState } from "react";



// import Button from "react-bootstrap/Button";

// import "./Login.css";

export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (        <Card>
              <CardHeader color="primary">
                <h4 >LOG IN</h4>
                
              </CardHeader>
              <CardBody>
<div className="Login">

      <Form onSubmit={handleSubmit}>
      <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      inputProps={{
                        // onChange: (e) => handleChange(e),
                        type: "email"
                      }}
                      labelText="Email Address"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        inputProps={{
                          // onChange: (e) => handleChange(e),
                          type: "password"
                        }}
                        labelText="Enter Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
        
        <Button 
                  variant="contained"
                  color="primary"
                  
                  onClick=""
                >
                  Book me
              </Button>

      </Form>

    </div>
              </CardBody>
            </Card>

    

  );

}


