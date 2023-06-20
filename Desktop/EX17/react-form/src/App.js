import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './component/Contact';
import Add from './component/add';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;