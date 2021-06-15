import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
