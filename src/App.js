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
import AddCards from './components/AddCards';
import Insights from './components/Insights';
import About from './components/About';
import Document from './components/Document';
import Rankings from './components/Rankings';
import EditProfile from './components/EditProfile';
import Register from './components/Register';
import Orgreg from './components/Orgreg';
import Qa from './components/Qa';
import EditOwnProf from './components/EditOwnProf';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="bg-gradient-to-b from-violet-600/[.2] via-transparent bg-slate-900">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/getstarted' element={<Getstarted/>}/>
        <Route path='/Rankings' element={<Rankings/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route path='/user/:userId' element={<Account/>}/>
        <Route exact path='/Addproj' element={<Addproj/>}/>
        <Route exact path='/GetFreelance' element={<GetFreelance/>}/>
        <Route exact path='/Document' element={<Document/>}/>
        <Route exact path='/Qa' element={<Qa/>}/>
        <Route exact path='/EditProfile' element={<EditProfile/>}/>
        <Route exact path='/GetFreelance/AddCards' element={<AddCards/>}/>
        <Route exact path='/projects/:projectId' element={<Inproj/>}/>
        <Route path='/projects/addproj/:userId' element={<Addproj/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/orgregister' element={<Orgreg/>}/>
        <Route path='/Rankings/Info' element={<Info/>}/>
        <Route path='/projects/:projectId/insights/:cId' element={<Insights/>}/>
        <Route path='/user/:userId/edit' element={<EditOwnProf/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
