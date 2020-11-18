import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Landing from './components/Landing Page/Landing'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
