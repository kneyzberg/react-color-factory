import { Link } from "react-router-dom";

function ColorHeader(){
  
  return (
    <div>
      <h1>Welcome to the color factory!</h1>
      <Link to="/colors/new">Add a color</Link>
    </div>
  )
}

export default ColorHeader;