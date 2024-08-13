import HeaderComponent from './components/header';
import CuisineComponent from './components/cuisine';
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
  return (
  <div>
<HeaderComponent></HeaderComponent>

  <CuisineComponent></CuisineComponent>
 
  </div>
  );
}

export default App;
