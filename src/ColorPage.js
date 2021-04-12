import { useParams, Link } from "react-router-dom";


function ColorPage({resetBody}){
  const {color} = useParams();

  return(
    <div style={{backgroundColor: color, height: "100vh"}}>
      <h1>ISN'T {color} BEAUTIFUL</h1>
      <h1>WAOW SO PRETTY!!!</h1>
      <Link to="/colors" onclick={resetBody}>GO BACK!</Link>
    </div>
  

)
}

export default ColorPage;