import logo from './logo.svg';
import './App.css';
import Handbags from './components/handbag/handbags';
import Shop from './components/shop_by_catagories/shop';
import Carousel from './components/carousel/carousel';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      {/* <Handbags/>
      <Shop/>
      <Carousel/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
