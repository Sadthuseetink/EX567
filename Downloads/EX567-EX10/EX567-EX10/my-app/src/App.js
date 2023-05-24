// import './App.css';
// import Navigation from './components/Navigation';
// import Player from './Players';
// function App() {
//   return (
//     <div className='App'>
//       <Navigation/>
//        <Player/>
//     </div>
//   );
// }

// export default App;
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default App;

