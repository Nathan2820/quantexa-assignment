import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;