import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Reviews from './Pages/Reviews';
import Testimonials from './Pages/Testimonials';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Reviews />
       <Testimonials />
       <Footer />
    </div>
  );
}

export default App;
