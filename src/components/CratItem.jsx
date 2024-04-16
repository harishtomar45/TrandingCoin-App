import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { remove } from '../featurs/cart/cartSlice';

const CratItem = ({coin}) => {

  const dispatch = useDispatch();

  const [count, setCount] = useState(1);


  const plusOne = () =>{
   setCount(count + 1)
  }

  const minasOne = () =>{
    if(count > 1){
      setCount(count -1)
    }
   }

   
  const final = count *coin.market_data.current_price.usd;
 

  const handleRemove = (id) => {
        dispatch(remove(id))
  }
  return (
    <Card sx={{margin:"20px 0px"}}>
      <CardContent>
      <CardMedia
            sx={{ height: 240, margin: "20px 0px" }}
            title={coin?.name}
            image={coin?.image?.large}></CardMedia>
        <Typography variant='h5'>
            {coin?.name}
        </Typography>
        <Typography variant='body1' gutterBottom>
        ${final}
        </Typography>
         <Button onClick={minasOne}>
            <RemoveIcon/>
         </Button>
         {count}
         <Button onClick={plusOne} >
            <AddIcon/>
         </Button>
         <Button onClick={() => handleRemove(coin.id)} >
           <DeleteIcon/>
         </Button>
      </CardContent>
    </Card>
  )
}

export default CratItem