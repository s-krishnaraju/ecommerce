import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-5">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen></HomeScreen>} exact></Route>
            <Route
              path="/product/:id"
              element={<ProductScreen></ProductScreen>}
            ></Route>
            <Route
              path="/cart/:id?"
              element={<CartScreen></CartScreen>}
              exact
            ></Route>
            <Route
              path="/login"
              element={<LoginScreen></LoginScreen>}
              exact
            ></Route>
            <Route
              path="/register"
              element={<RegisterScreen></RegisterScreen>}
              exact
            ></Route>
          </Routes>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
