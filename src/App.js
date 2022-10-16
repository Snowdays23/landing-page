import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Body from './components/body'
import Body2 from './components/body2'
import "./assets/js/PureSnow.js";

function App() {
  return (
    <div  className="App"> 
      <div className = " wrapper-parallex ">
          <div  id="snow" className="wrapper-mountains"></div>
      </div>
      <Header></Header>
      <Body></Body>
      <Body2></Body2>
    </div>
  );
}

export default App;
