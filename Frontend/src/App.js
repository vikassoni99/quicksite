import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landing from './components/Landing Page/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import FindWeb from './components/FindWeb'
import Home from './components/Home';
import Product from './components/Product'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route
            exact
            path='/product'
            component={Product} />
          <Route
            exact
            path='/login'
            component={Login} />
          <Route
            exact
            path='/signup'
            component={Signup} />
          <Route
            path='/:username/home'>
            <Home />
          </Route>
          <Route
            exact
            path='/:username'
            component={FindWeb} />
          <Route
            exact
            path='/'
            component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
