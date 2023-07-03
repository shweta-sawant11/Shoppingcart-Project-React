import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import ContextApi from './components/ContextApi';
import Appbar from './components/Appbar';
// import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Router>
        <ContextApi>
        <Appbar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/category' element={<Category/>}/>
         <Route/>
        </Routes>
        {/* <Footer/> */}
        </ContextApi>
      </Router>
     
    </div>
  );
}

export default App;
