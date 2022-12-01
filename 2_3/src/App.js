import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import SingleCar from './components/singleCar/SingleCar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/car/:id" element={<SingleCar />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
