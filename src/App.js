
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers'
import Header from './components/Header';
import EditUser from './components/EditUser';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/alluser' element={<AllUsers />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/edituser/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
