import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../featurs/auth/authSlice";
import { HowToReg, ShoppingCart } from "@mui/icons-material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const {cartItems} = useSelector((state)=>state.cart)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          <Link to={"/"}>Auth App</Link>
        </Typography>

        {!user ? (
          <>
            <Link to={"/Register"} sx={{ margin: "0px 10px" }}>
              <IconButton variant="text" color="inherit">
                <HowToReg />
              </IconButton>
            </Link>
            <Link to={"/login"} sx={{ margin: "0px 10px" }}>
              <IconButton
                variant="text"
                color="inherit"
                sx={{ margin: "0px 10px" }}>
                <VpnKeyIcon />
              </IconButton>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/cart"}>
              <Button color="inherit">
                <Badge
                  badgeContent={cartItems.length}
                  color="error"
                  sx={{ margin: "0px 20px" }}>
                  <ShoppingCart />
                </Badge>
              </Button>
            </Link>

            <Button
              variant="contained"
              color="error"
              endIcon={<LogoutIcon />}
              onClick={handleLogout}>
              Log Out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
