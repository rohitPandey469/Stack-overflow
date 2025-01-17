import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { loadStripe } from "@stripe/stripe-js";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
// style
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function StripePayment({ slideIn, handleSlideIn }) {
  const navigate=useNavigate()
  var User = useSelector((state) => state.currentUserReducer);
  const [product, setProduct] = useState([
    {
      name: "The Discovery Gateway - Free Plan",
      price: 0,
      productOwner: "Rohit Pandey",
      description:
        "With our One Daily Question Free Plan, you'll have the opportunity to post one question every day, absolutely free of charge. Atleast you will get to know how it works and you can purchase a paid option then.",
      quantity: 1,
    },
    {
      name: "The Inquisitive Explorer - Silver Plan",
      price: 100,
      productOwner: "Rohit Pandey",
      description:
        "Our Silver Plan is tailor-made for individuals. With the ability to post up to five questions a day, you'll have the power to unravel complex issues and make informed decisions faster than ever before.",
      quantity: 1,
    },
    {
      name: "The Knowledge Enthusiast's Haven - Gold",
      price: 1000,
      productOwner: "Rohit Pandey",
      description:
        "Our Gold Plan is the ultimate choice for those who demand a comprehensive and personalized experience. With the ability to post unlimited questions. So, welcome my lovely user to this parallel world of fantasy",
      quantity: 1,
    },
  ]);

  const makePayment = async (product) => {
    if (User === null) {
      alert("login or signup to purchase a plan");
      return navigate("/Auth");
    }
    const stripe = await loadStripe(
      "pk_test_51Nt6DFSJVmKxXoSYyLXl02SK9WA7DUpQZIOO76bCOgXKrdATOfF8FXoZFo6m8X4vhwVTDEvKhqjwKwFqHNct1ggr00XZoNZtW6"
    );
    const body = { product: product };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "https://stack-overflow-7tme.vercel.app/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div style={{ margin: 0 }} className="home-container-2">
        <Container
          style={{
            paddingTop: "80px",
            margin: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Row>
            <Col xs={12} md={4}>
              <Card style={{ height: "35rem", marginBottom: "8px" }}>
                <Card.Img variant="top" width="" src={icon1} />
                <Card.Body>
                  <Card.Title>{product[0].name}</Card.Title>
                  <Card.Text>{product[0].description}</Card.Text>
                  <Button
                    style={{
                      width: "100%",
                      padding: "20px",
                      backgroundColor: "transparent",
                      color: "blue",
                      fontWeight: "600",
                    }}
                    variant="primary"
                    onClick={() => makePayment(product[0])}
                  >
                    Free
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card style={{ height: "35rem", marginBottom: "8px" }}>
                <Card.Img variant="top" src={icon2} />
                <Card.Body>
                  <Card.Title>{product[1].name}</Card.Title>
                  <Card.Text>{product[1].description}</Card.Text>

                  <Button
                    style={{
                      width: "100%",
                      padding: "20px",
                      backgroundColor: "transparent",
                      color: "silver",
                      fontWeight: "600",
                      borderColor: "silver",
                    }}
                    variant="primary"
                    onClick={() => makePayment(product[1])}
                  >
                    ₹{product[1].price}/month
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card style={{ height: "35rem" }}>
                <Card.Img variant="top" src={icon3} />
                <Card.Body>
                  <Card.Title>{product[2].name}</Card.Title>
                  <Card.Text>{product[2].description}</Card.Text>
                  <Button
                    style={{
                      width: "100%",
                      padding: "20px",
                      backgroundColor: "transparent",
                      color: "gold",
                      fontWeight: "600",
                      borderColor: "gold",
                    }}
                    variant="primary"
                    onClick={() => makePayment(product[2])}
                  >
                    ₹{product[2].price}/month
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default StripePayment;
