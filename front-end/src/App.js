import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProtectedRoute from './components/protectedRoute';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Nav/>
     <Routes>
     <Route element = {<ProtectedRoute/>}>
      <Route path = '/' element = {<ProductList/>}/>
      <Route path = '/add' element = {<AddProduct/>}/>
      <Route path = '/update/:id' element = {<UpdateProduct/>}/>
      <Route path = '/profile' element = {<h1>Profile Component</h1>}/>
      </Route>
      <Route path = '/signup' element = {<SignUp/>}/>
      <Route path = '/login' element = {<Login/>}/>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
