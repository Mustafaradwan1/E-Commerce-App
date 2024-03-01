import { Route, Routes,BrowserRouter } from "react-router-dom";
import Navbar from "./Components/header/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Product from "./Components/product/Product";
import Category from "./Components/category/Category";
import Search from "./Components/search/Search";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";


function App() {


  return <>
  <div className="b">
    <BrowserRouter>
    <div className=''>
        <div>
          <Navbar/>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Category/:id' element={<Category />} />
            <Route path='/Search/:id' element={<Search />} />
            <Route path='/Product/:id' element={<Product />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/LogIn' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
        </div>
      </div>
  </BrowserRouter>
  </div>

  </>
}

export default App;
