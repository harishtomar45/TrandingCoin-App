import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CoinCard from "../components/CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCoin } from "../featurs/coins/coinSlice";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { trending, isLoading } = useSelector((state) => state.coins);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(getCoin());
  }, [user]);

  if (isLoading || trending.lenght === 0) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ padding: "70px" }}>
        trending coins
      </Typography>

      <Grid container spacing={2} sx={{ margin: "20px 0px" }}>
      {trending.map((coin) => (
          <CoinCard key={coin.item.coin_id} coin={coin.item} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
