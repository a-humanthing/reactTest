import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Home />
    </div>
  );
}

export default App;
