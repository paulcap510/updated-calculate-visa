import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
