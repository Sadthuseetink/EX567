
import './App.css';
import Players from './Players';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
//import PlayersPresentation from './components/PlayersPresentetion';
import { Route, Routes } from 'react-router-dom';
function App(){
  return(
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Players/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;


