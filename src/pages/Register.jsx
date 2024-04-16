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
import { toast } from "react-toastify";
import { registerUser } from "../featurs/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { isLoading, isError, isSuccess, user, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputStyle = {
    margin: "10px 0px",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSbmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Password Not Match !");
    }

    dispatch(registerUser(formData));
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
    <Container sx={{ padding: "80px" }}>
      <Typography variant="h3" align="center">
        Register Here
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleSbmit}>
            <TextField
              label="Name"
              sx={inputStyle}
              onChange={handleChange}
              value={name}
              name="name"
              required
              variant="outlined"
              fullWidth></TextField>
            <TextField
              label="Email"
              sx={inputStyle}
              onChange={handleChange}
              value={email}
              name="email"
              required
              variant="outlined"
              fullWidth></TextField>
            <TextField
              variant="outlined"
              label="Password"
              sx={inputStyle}
              onChange={handleChange}
              value={password}
              name="password"
              type="password"
              fullWidth
              required></TextField>
            <TextField
              variant="outlined"
              label="Confirm Password"
              sx={inputStyle}
              onChange={handleChange}
              value={password2}
              name="password2"
              type="password"
              fullWidth
              required></TextField>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              color="success">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;
