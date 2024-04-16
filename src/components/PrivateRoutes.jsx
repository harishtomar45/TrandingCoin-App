import React from 'react'
import useAuthSattus from '../hook/useAuthSattus'
import { Container, LinearProgress } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const {loggedIn, checkStatus} = useAuthSattus();
 

    
  if (checkStatus) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return loggedIn ? <Outlet/> : <Navigate to={"/login"}/>


}

export default PrivateRoutes