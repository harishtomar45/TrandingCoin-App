import {
  Button,
  Card,
  CardContent,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../featurs/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  const inputStyle = {
    margin: "10px 0px",
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError || message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h4" align="center">
        Login Here
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              label="Email"
              sx={inputStyle}
              name="email"
              value={email}
              onChange={handleChange}
              fullWidth
              required></TextField>
            <TextField
              variant="outlined"
              label="Password"
              sx={inputStyle}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              fullWidth
              required></TextField>

            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              size="large">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
