import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import { Stack } from "@mui/system";
import Checkout from "./components/Checkout"
import Thanks from "./components/Thanks"

export const config = {
  endpoint: `https://qkart-frontend-dgtg.onrender.com/api/v1`,
};


function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/checkout' component={Checkout}/>
        <Route path='/thanks' component={Thanks}/>
      </Switch>
    </div>
  );
}

export default App;
