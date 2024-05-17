import logo from './logo.svg';
import './App.css';
import Handbags from './components/handbag/handbags';
import Shop from './components/shop_by_catagories/shop';

function App() {
  return (
    <div className="App">
      <Handbags/>
      <Shop/>
    </div>
  );
}

export default App;
