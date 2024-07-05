import './App.css';
import Navbar from "./Navbar"
import Homepage from "./Homepage"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="content">
     <Homepage/>
     </div>
    </div>
  );
}

export default App;
