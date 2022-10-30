import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Body1 from './components/body1'
import Body2 from './components/body2'
import Body3 from './components/body3'
import Body4 from './components/body4';
import Body5 from './components/body5';
import Body6 from './components/body6';
import Separator from './components/subcomponents/separator';
import bg from "./assets/img/real-mountains.png";
// import "./assets/js/PureSnow.js";

function App() {
  return (
    <div  className="App"> 
      <div className = " wrapper-parallex ">
          <div  id="snow" className="wrapper-mountains">
            <img src={bg}  />
          </div>
      </div>
      <Header></Header>
      <Body1></Body1>
      <Body2></Body2>
      <Body3></Body3>
      <Separator number={4}></Separator>
      <Body4></Body4>
      <Separator number={30}></Separator>
      <Body5></Body5>
      <Separator number={70}></Separator>
      <Body6></Body6>
           
    </div>
  );
}

export default App;
