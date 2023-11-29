import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Campo from './componentes/campo.js';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      campo:[["00","01","02"],["10","11","12"],["20","21","22"]],
      minas:0,
      filas:0,
      columnas:0,
    }
  }
  render(){
    return (
      <div className="App">
        <Campo></Campo>
      </div>
    );
  }
}

export default App;
