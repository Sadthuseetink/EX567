import { Card, Col, Container, Row } from 'react-materialize';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PlayersPresentation from './components/PlayersPresentation';
function App() {
  return (
    <div className="App">
      <Navigation>
      <Container>
	<Row>
		Data.map(=(<Col><Card></Card></Col>))
</Row>
</Container>

      </Navigation>
      <Routes>
        <Route path='/' element={<PlayersPresentation/>}></Route>
        <Route path='/Detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
