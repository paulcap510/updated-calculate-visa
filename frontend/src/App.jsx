import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
