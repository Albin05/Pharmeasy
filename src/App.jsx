import './App.css';
import { Footer } from './components/Fotter/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Productsmain } from './components/Products/Productsmain';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Productsmain/>
      <Footer/>
    </div>
  );
}

export default App;
