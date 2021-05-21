import { BrowserRouter, Link, Route } from "react-router-dom";

import './App.css';

// import SimpleForm from './components/forms/simpleForm';
import Login from '../../pages/login';
import Signup from '../../pages/signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <header className="App-header">
          <nav>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
          </nav>
        </header>

        <div>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
