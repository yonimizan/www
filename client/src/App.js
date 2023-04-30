import './App.css';
import sandbox from './sandbox/component/SandBox'
import CardComponent from './cards/components/card/card';

function App () {
  return(
     <div className="App" >
     <sandbox/>
     <CardComponent/>
    
     </div>
  );
}

export default App;