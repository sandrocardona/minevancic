import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Campo from './componentes/campo.js';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
/*       campo:[["00","01","02"],["10","11","12"],["20","21","22"]], */
      campo:[],
      minas:0,
      filas:10,
      columnas:10,
    }
  }
  
  rellenar(){
    let tabla=[]
    for (let i=0;i<this.state.filas;i++){
      let fila=[]
      for (let j=0;j<this.state.columnas;j++){
        fila.push(999)
      }
      tabla.push(fila)
    }
    this.setState({campo:tabla})
  }

  render(){
    return (
      <div className="App">
        <Button onClick={()=>this.rellenar()}>JUGAR</Button>
        <Campo campo={this.state.campo} />
      </div>
    );
  }
}

export default App;
