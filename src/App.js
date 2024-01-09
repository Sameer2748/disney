import { BrowserRouter as  Router,Routes , Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/header';
import Home from './components/Home.jsx';
import Detail from './components/Detail';
import Video from './components/Video';
import Search from './components/Search';
import Disney from './components/Disney';
import Marvel from './components/Marvel';
import Pixar from './components/Pixar';
import StarWars from './components/StarWars';
import NationalGeographic from './components/NationalGeographic';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
         <Route  exact path='/' element={<Login/>} /> 
         <Route  exact path='/home' element={<Home />} /> 
         <Route  exact path='/detail/:id' element={<Detail  />} /> 
         <Route  exact path='/disney' element={<Disney/>} /> 
         <Route  exact path='/marvel' element={<Marvel/>} /> 
         <Route  exact path='/pixar' element={<Pixar/>} /> 
         <Route  exact path='/starwars' element={<StarWars/>} /> 
         <Route  exact path='/national' element={<NationalGeographic/>} /> 
         <Route  exact path='/video/:id' element={<Video/>} /> 
         <Route  exact path='/search/:id' element={<Search/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
