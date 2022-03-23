import Table from './components/Table';
import data from './helpers/data';
import './App.css';

function App() {
  return (
    <div className="App">
     <Table sweets ={data}/>
    </div>
  );
}

export default App;
