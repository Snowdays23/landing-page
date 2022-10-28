import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Body1 from './components/body1'
import Body2 from './components/body2'
import Body3 from './components/body3'
// import Body4 from './components/body4';
// import "./assets/js/PureSnow.js";

function App() {
  return (
    <div  className="App"> 
      <div className = " wrapper-parallex ">
          <div  id="snow" className="wrapper-mountains"></div>
      </div>
      <Header></Header>
      <Body1></Body1>
      <Body2></Body2>
      <Body3></Body3>
      {/* <Body4></Body4> */}
      
    </div>
  );
}

export default App;
