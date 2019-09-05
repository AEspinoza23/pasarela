import React from 'react'
import { Route, Switch} from 'react-router-dom'

//Componenetes
import App from './componentes/App'
import Home from './componentes/Home'
import Pasajeros from './componentes/Pasajeros'
import Resumen from './componentes/Resumen'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Pasajeros" component={Pasajeros} />
      <Route exact path="/Resumen" component={Resumen} />
    </Switch>
  </App>

export default AppRoutes