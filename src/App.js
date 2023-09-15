import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
    <div className="bg-gradient-to-b from-violet-600/[.2] via-transparent bg-slate-900">
      <Navbar/>
      <Home/>
    </div>
    </>
  );
}

export default App;
