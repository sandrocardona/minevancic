import React from 'react';
import { Button,Row,Col } from 'reactstrap';

const Campo = (props) => {
    let tabla=[]
    for (let i = 0; i < props.campo.length; i++) {
        let fila = []
        for (let j = 0; j < props.campo[i].length; j++) {
            fila.push(<Button>XXX</Button>)
        }
        tabla.push(<Row><Col>{fila}</Col></Row>)
    }

    return (tabla);
}

export default Campo;