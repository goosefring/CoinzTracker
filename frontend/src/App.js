import './index.css';
import MainPage from './components/MainPage';
import Coins from './components/Coins';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoinsPage from './components/CoinsPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route exact path="/" Component={MainPage} />
        <Route path="/:id" Component={CoinsPage} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
