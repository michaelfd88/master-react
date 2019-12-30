import React, { Component } from 'react';
import {Table,ButtonToolbar,Button } from 'react-bootstrap';
import axios from 'axios';

<di className="container">
    <div className="row">
<ButtonToolbar>
    <Button variant="success">Agregar</Button>
</ButtonToolbar>
    </div>
</di>

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
      }
    async componentDidMount(){
        let result = await axios.get('https://jsonplaceholder.typicode.com/users')
        let arreglo=[]
        result.data.map(item=>{
            arreglo.push(item)
          })
          this.setState({
            data:arreglo
          })
          console.log(this.state.data)
    }
    RemoveRegister(e){

        console.log("Borrar Item", e)
        this.setState({
            data:this.state.data.filter(item => item.id !=e)
        })
    }
    render() {
        return (
           
            <div className="p-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Username</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((item)=>(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.username}</td>
                            <td style={{cursor:"pointer"}} onClick={(e) =>this.RemoveRegister(item.id, e)}><ButtonToolbar>
                                 <Button variant="danger">x</Button>
                            </ButtonToolbar></td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Usuarios;