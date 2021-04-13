import { useParams, Link } from "react-router-dom";


function ColorPage({colorList}){
  const {color} = useParams();
  
  const colorObj = colorList.find(c => c.name === color);

  console.log("Color obj", colorObj)

  return(
    <div style={{backgroundColor: colorObj.value, height: "100vh"}}>
      <h1>ISN'T {colorObj.name} BEAUTIFUL</h1>
      <h1>WAOW SO PRETTY!!!</h1>
      <Link to="/colors">GO BACK!</Link>
    </div>
  

)
}

export default ColorPage;