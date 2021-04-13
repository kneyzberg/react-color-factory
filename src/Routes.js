import {useState} from "react"
import { Route, Switch, Redirect } from "react-router-dom";
import ColorsList from "./ColorsList";
import ColorBody from "./ColorBody";
import ColorPage from "./ColorPage";
import NewColorForm from "./NewColorForm";

const defaultColors = [{name:"red", value:"red"}, 
{name:"green", value:"green"}, 
{name:"blue", value:"blue"}];

function Routes({ colors = defaultColors }) {
  const [colorList, setColorList] = useState(colors);

  function addColor(newColor) {
    setColorList(colorList => [...colorList, newColor])
  }

  return (
    <Switch>
      <Route exact path="/colors">
        <ColorsList colorList={colorList} />
      </Route>

      <Route exact path="/colors/new">
          <NewColorForm addColor={addColor}/>
      </Route>

      <Route exact path="/colors/:color">
        <ColorPage colorList={colorList}/>
      </Route>

      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;


