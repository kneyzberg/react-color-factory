import { useParams } from "react-router-dom";
import {useState} from "react";

function ColorBody(props){
  const {color} = useParams();
  // const [bodyColor, setBodyColor] = useState("");

  function changeBody(color){
    document.body.style.backgroundColor = color
    // setBodyColor(bodyColor => color);
    return null;
  }

  function resetBody(){
    // setBodyColor(bodyColor => "");
    document.body.style.backgroundColor = "";
  }

  return(
    <div >
      {changeBody(color)}
      {console.log(color)}
      {props.children}
    </div>
  )
}

export default ColorBody;