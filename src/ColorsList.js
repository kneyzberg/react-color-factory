import { useState } from "react";
import { Link, Route} from "react-router-dom";
import ColorHeader from "./ColorHeader";
import NewColorForm from "./NewColorForm";


function ColorsList({colorList}) {

  console.log(colorList)

  return (
    <div>

      <ColorHeader />

      <h4>Please pick a color!</h4>
      <ul>
        {colorList.map((color) => (
          <li>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorsList;
