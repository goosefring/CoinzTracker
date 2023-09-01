import './index.css';
import MainPage from './components/MainPage';
import Coins from './components/Coins';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" Component={MainPage}>
        </Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
