import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import logo from './logo.svg';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />

        <div className='body'>
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/gallery' element = {<Gallery/>} />
          </Routes>
          
        </div>

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
