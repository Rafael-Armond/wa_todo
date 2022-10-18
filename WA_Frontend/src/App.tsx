import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddTodo } from "./pages/AddTodo";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addTodo" exact component={AddTodo} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
