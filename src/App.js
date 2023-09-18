import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import Login from './components/Login';
import Getstarted from './components/Getstarted';
import Userdash from './components/Userdash';
import Projects from './components/Projects';
import GetFreelance from './components/GetFreelance';
import Addproj from './components/Addproj';
import Inproj from './components/Inproj';
import Account from './components/Account';

function App() {
  return (
    <>
    <div className="bg-gradient-to-b from-violet-600/[.2] via-transparent bg-slate-900">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/getstarted' element={<Getstarted/>}/>
        <Route path='/user/:userid' element={<Account/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route exact path='/GetFreelance' element={<GetFreelance/>}/>
        <Route exact path='/projects/:projectId' element={<Inproj/>}/>
        <Route path='/projects/addproj/:userId' element={<Addproj/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
