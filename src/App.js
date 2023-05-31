import './App.css';
import Player from './Players';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className='App'>
      <Navigation/>
       <Player/>
       <Footer/>
    </div>
  );
}
export default App;