import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import States from './components/States';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <States name={"kerala"} lang={'Malayalam'}/>
      <States name={"Tamilnadu"} lang={'Tamil'}/>
      <States name={"Karnataka"} lang={'Telugu'}/>
      <States name={"andra"} />
    </div>
  );
}

export default App;
