import './App.css';
import { useEffect, useState } from 'react';
import NavbarScreen from './components/Navbar/Navbar';
import Home from './components/Home';
import SignUp from './components/signUp';
import employerSignUp from './components/employerSignup';
import employeeSignUp from './components/employeeSignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './firebase';
import employerView from './components/employerView';
import employeeView from './components/employeeView';


function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged
    (userAuth =>{
      const user = {
        uid: userAuth?.uid,
        email:userAuth?.email
      }
      if(userAuth){
        console.log(userAuth)
        setUser(user)
      }else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className ="container">
      <Router>
        <NavbarScreen/>
        {/* {user ? <Home /> : <employerSignUp/>} */}

      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/signup" component = {SignUp} />
        <Route path="/employerSignUp" component = {employerSignUp}/>
        <Route path="/employeeSignUp" component = {employeeSignUp}/>
        <Route path="/employerView" component = {employerView}/>
        <Route path="/employeeView" component = {employeeView}/>

      </Switch>  
      </Router>
      
    </div>
  );
}

export default App;
