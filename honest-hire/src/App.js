import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import SignUp from './pages/Signup/index';
import SignIn from './pages/SignIn';
import employerSignUp from './pages/Employer/Signup';
import employeeSignUp from './pages/Employee/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './firebase';
import employerView from './pages/Employer/Home';
import employeeView from './pages/Employee/Home';
import AboutUs from './components/FAQ/AboutUs';
import { ThemeProvider } from '@material-ui/styles';
import { theme }  from './theme.js';


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
      <ThemeProvider theme={theme}>
      <Router>
        {/* {user ? <employerSignUp /> : <Home/>} */}

      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/Home" component = {Home} />
        <Route path="/employerSignUp" component = {employerSignUp}/>
        <Route path="/employeeSignUp" component = {employeeSignUp}/>
        <Route path="/employerView" component = {employerView}/>
        <Route path="/employeeView" component = {employeeView}/>
        <Route path="/about" component = {AboutUs}/>
        <Route path="/signIn" component = {SignIn}/>
        <Route path="/signUp" component = {SignUp} />
        {/* {user ? <employerSignUp /> : <Home/>} */}

      </Switch>  
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
