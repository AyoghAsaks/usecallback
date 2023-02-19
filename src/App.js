import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function App() {

  let [state, setState] = useState({
    price: 0
  }); 

  //See how "useCallback()" function is applied below
  let fetchPrice = useCallback(() => {
    setState({
      ...state, price: Math.floor(Math.random() * 100) + 1 //price is assigned random values
    });
  }, [state])
  
  useEffect(() =>{
    const interval = setInterval(() => {
      fetchPrice();
    }, 5000);
    return () => clearInterval(interval);
  }, [fetchPrice])

  //let { price } = state; //Destructure "price" variable

  return (
    <section>
      <Container className="">
        <Row className="">
           <Col>uuu</Col>
           <Col className="">
           
              <h1 className="bg-danger ms-5">{state.price}</h1>
              
              {/*<h1>{price}</h1>*/}
          
           </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;