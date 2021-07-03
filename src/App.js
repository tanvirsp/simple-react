import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';


function App() {


  return (
    <div className="App">
      <Header></Header>
      <div className="playes-container">
        <Players></Players>
      </div>

    </div>
  );
}

export default App;
