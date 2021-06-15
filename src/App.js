import "./styles.css";
import Login from "./Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
