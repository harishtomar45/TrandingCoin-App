import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { CoinData } from "../featurs/coins/coinSlice";

const CoinCard = ({ coin }) => {
  const { isLoading} = useSelector((state) => state.coins);

  const dispatch = useDispatch();

  const getData = (id) => {
   
    dispatch(CoinData(id));
  };

 
  if (isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardMedia sx={{ height: 250 }} image={coin.large} title={coin.name} />
        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            {coin.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/coin/${coin.id}`}>
            <Button
              variant="contained"
              size="small"
              onClick={() => getData(coin.id)}>
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CoinCard;
