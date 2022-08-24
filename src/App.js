import './App.css';
import Cars from './components/car';
import { Block } from './components/car/style';
import PlayGround from './playground';

function App() {

  return (
    <Block className="App">
      <PlayGround />
    </Block>
  );
}

export default App;
