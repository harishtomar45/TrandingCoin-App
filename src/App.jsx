import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CoinDetials from "./pages/CoinDetials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="coin/:id" element={<CoinDetials />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
