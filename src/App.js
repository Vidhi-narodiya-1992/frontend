import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from './components/Login'
import AddProduct from "./components/AddProduct";
import ProductList  from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList/>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/logout" element={<h1>Logout Product Component</h1>} />
            <Route path="/profile" element={<h1>Profile Product Component</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
