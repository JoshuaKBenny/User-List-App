import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchUser from './components/SearchUser';
import ViewUsers from './components/ViewUsers';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddUser/>}/>
    <Route path="/search" element={<SearchUser/>}/>
    <Route path="/view" element={<ViewUsers/>}/>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
