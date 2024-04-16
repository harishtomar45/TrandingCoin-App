import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CoinData } from "../featurs/coins/coinSlice";
import { add } from "../featurs/cart/cartSlice";

const CoinDetials = () => {
  
  const { coin ,  isLoading } = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const { id } = useParams();


  const addToCart = (cartItem) =>  {
    dispatch(add(cartItem))
    
  }

  useEffect(() => {
    dispatch(CoinData(id));
  }, []);

  if (isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  if (!coin) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Card>
        <CardContent>
          <CardMedia
            sx={{ height: 240, margin: "20px 0px" }}
            title={coin?.name}
            image={coin?.image?.large}></CardMedia>
          <Typography variant="h4" gutterBottom>
            Name : {coin?.name}
          </Typography>
          <Typography variant="h4" gutterBottom>
            symbol : {coin?.symbol}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Price : $ {coin?.market_data?.current_price?.usd}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Description : {coin?.description?.en}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="success"
            onClick={() => addToCart(coin)}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CoinDetials;
