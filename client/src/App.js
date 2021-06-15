import { Switch, Route } from 'react-router-dom';
import Login from "./Components/Login"
import Welcome from "./Components/Welcome"        
import './App.css'  
function App() {
  return (
    <div>
    <div className="content">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/welcome" component={Welcome} /> 
      </Switch>
    </div>
  </div>
  );
}

export default App;
