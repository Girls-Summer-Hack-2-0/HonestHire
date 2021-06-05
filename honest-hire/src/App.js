
import './App.css';
import NavbarScreen from './components/Navbar/Navbar';
import Home from './components/Home';
import SignUp from './components/signUp';
import employerSignUp from './components/employerSignup';
import employeeSignUp from './components/employeeSignUp';
// ddd
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className ="container">
      <Router>
        <NavbarScreen/>
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/signup" component = {SignUp} />
        <Route path="/employerSignUp" component = {employerSignUp}/>
        <Route path="/employeeSignUp" component = {employeeSignUp}/>
      </Switch>  
      </Router>
      
    </div>
  );
}

export default App;
