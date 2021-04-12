import {useState} from "react";
import { Link } from "react-router-dom";
import ColorHeader from "./ColorHeader";

const defaultColors = ["red", "green", "blue"]

function ColorsList({colors=defaultColors}){
  const [colorList, setColorList] = useState(colors);

  return(
    <div>
      <ColorHeader/>
      <h4>Please pick a color!</h4>
      <ul>
        {colorList.map(color => 
        (<li>
          <Link to={`/colors/${color}`}>{color}</Link>
        </li>)
        )}
      </ul>
    </div>
  )}


  export default ColorsList;