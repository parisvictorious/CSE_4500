
import './App.css';
import Header from "./Header";
import BubbleChart from './components/BubbleChart';
import DataInputX from './DataInputX';
import DataInputY from './DataInputY';
import DataInputR from './DataInputR';
import './DataInputText.css';

function App() {
  return (
    <div className="app">
       <Header />
       {/* Title bar*/}
       {/* Tool Bar */}
       <div className="DataInputText">
       <DataInputX />
       <DataInputY />
       <DataInputR />
       </div>
       <div className='chart'>
         <BubbleChart/>
       </div>
      

    
    </div>
  );
}

export default App;
