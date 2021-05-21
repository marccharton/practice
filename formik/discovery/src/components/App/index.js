import './App.css';

// import SimpleForm from './components/forms/simpleForm';
import Login from '../../pages/login';
import Signup from '../../pages/signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      {/* <SimpleForm></SimpleForm> */}
      <Login></Login>
      <Signup></Signup>

    </div>
  );
}

export default App;
