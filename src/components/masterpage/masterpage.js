import React, { Component } from 'react';
import MyNavbar from './navbar'
import Sidebar from './sidebar'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profesores from '../paginas/profesores'
import Usuarios from '../paginas/usuarios'
class MasterPage extends Component {
  render() {
    return (
      <div className="h-100 pink">

        <div className="row h-100">
          <div className="col-2 p-0">
            <Sidebar />
          </div>
          <div className="col-10 p-0">
            <MyNavbar />
            <BrowserRouter>
              <Switch>
                <Route component={Usuarios} path="/usuarios"></Route>
                <Route component={Profesores} path="/profesores"></Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div>

      </div>
    );
  }
}

export default MasterPage;
