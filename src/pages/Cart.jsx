import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CratItem from "../components/CratItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce((p,c)=>{
    return p + c.market_data.current_price.usd;
  },0);



  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h3" align="center">
        Your Cart
      </Typography>

      <Grid container spacing={8}>
        <Grid item sm={12} md={8}>
          {cartItems.map((coin) => (
            <CratItem key={coin.id} coin={coin} />
          )
          )}
        </Grid>

        <Grid item sm={12} md={4} sx={{margin:"20px 0px"}}>
          <Card>
            <CardContent>
              <Typography variant="h6">your total</Typography>
              <Typography variant="h6" gutterBottom>
                $ {total.toFixed(3)}
              </Typography>
              <Button variant="contained">Pay Now</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
