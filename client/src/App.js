import './App.css';
import PageHeader from './component/PageHeader';
import LogicComponent from './sandbox/component/LogicComponent';
import MuiComponent from './sandbox/component/MuiComponent';
import StylesComponent from './sandbox/component/StylesComponent';

function App () {
  return(
     <div className="App" >
    <PageHeader/>
    <LogicComponent/>
    <StylesComponent/>
    <MuiComponent/>
    
     </div>
  );
}

export default App;