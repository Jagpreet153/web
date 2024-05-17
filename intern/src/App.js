import logo from './logo.svg';
import './App.css';
import Handbags from './components/handbag/handbags';
import Shop from './components/shop_by_catagories/shop';
import Carousel from './components/carousel/carousel';

function App() {
  return (
    <div className="App">
      <Handbags/>
      <Shop/>
      <Carousel/>
    </div>
  );
}

export default App;
