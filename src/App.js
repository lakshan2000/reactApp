import './App.css';
import {Component3} from './Components/Component3';
import {MyName} from './Components/Component3';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import BranchComponent01 from '../branch/BranchComponent01';
import BranchComponent02 from '../branch/BranchComponent02';

function App() {

  return (
    <div className="App">
      <h1>Project</h1>
      <Component1 name="lakshan" age="24" city="kurunegala"/>
      <Component2/>
      <Component3/>
      <br/>
      <MyName name="bandara"/>
      
      <BranchComponent01/>
      <BranchComponent02/>
    </div>
  );
}

export default App;
