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
import Info1 from './components/Info1';
import Info2 from './components/Info2';
import Info3 from './components/Info3';
import Info4 from './components/Info4';
import Info5 from './components/Info5';
import Info6 from './components/Info6';
import Info7 from './components/Info7';
import Info8 from './components/Info8';
import Footer from './components/Footer';
import DetaulFree from './components/DetaulFree';
import Waiting from './components/Waiting'
import RgWait from './components/RgWait'
import Blog from './components/Blog';
import Readblog from './components/Readblog';
import AddOrgDetails from './components/AddOrgDetails';
import Pricing from './components/Pricing';



function App() {
  console.log(localStorage.getItem('user'));
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
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/user/:userId' element={<Account/>}/>
        <Route exact path='/Addproj' element={<Addproj/>}/>
        <Route exact path='/GetFreelance' element={<GetFreelance/>}/>
        <Route exact path='/Document' element={<Document/>}/>
        <Route exact path='/Qa' element={<Qa/>}/>
        <Route exact path='/EditProfile' element={<EditProfile/>}/>
        <Route exact path='/GetFreelance/AddCards' element={<AddCards/>}/>x
        <Route exact path='/project/:projectId' element={<Inproj/>}/>
        <Route exact path='/GetFreelance/DetaulFree/:id' element={<DetaulFree/>}/>
        <Route path='/projects/addproj/:userId' element={<Addproj/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Waiting' element={<Waiting/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/RgWait' element={<RgWait/>}/>
        <Route path='/orgregister' element={<Orgreg/>}/>
        <Route path='/Rankings/Info' element={<Info/>}/>
        <Route path='/Rankings/Info1' element={<Info1/>}/>
        <Route path='/Rankings/Info2' element={<Info2/>}/>
        <Route path='/Rankings/Info3' element={<Info3/>}/>
        <Route path='/Rankings/Info4' element={<Info4/>}/>
        <Route path='/Rankings/Info5' element={<Info5/>}/>
        <Route path='/Rankings/Info6' element={<Info6/>}/>
        <Route path='/Rankings/Info7' element={<Info7/>}/>
        <Route path='/Rankings/Info8' element={<Info8/>}/>
        <Route path='/projects/:projectId/insights/:cId' element={<Insights/>}/>
        <Route path='/user/:userId/edit' element={<EditOwnProf/>}/>
        <Route path='/Blog/Readblog/:id' element={<Readblog/>}/>
        <Route path='/org/:orgId/approve' element={<Waiting/>}/>
        <Route path='/org/:orgId/approvestud' element={<RgWait/>}/>
        <Route path='/org/:orgId/profile' element={<AddOrgDetails/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
