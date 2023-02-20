
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Checkout } from './pages/Checkout';
import { Game } from "./pages/Game"
import {Cart} from "./pages/Cart"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/game"} element={<Game/>} />
        <Route path={"/cart"} element={<Cart/>} />
        <Route path={"/checkout"} element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
