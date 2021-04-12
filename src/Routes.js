import { Route, Switch, Redirect } from "react-router-dom";
import ColorsList from "./ColorsList";
import ColorBody from "./ColorBody";
import ColorPage from "./ColorPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/colors" >
        <ColorsList/>
      </Route>
      <Route exact path="/colors/:color" >
          <ColorPage/>
      </Route>
      
    </Switch>
  );
}

export default Routes;