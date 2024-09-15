import { useState } from "react";
import Input from "./Input";
import cities from "./cities.json"
function App() {
   const [text,setText]=useState("")
   const [hint,setHint]=useState([])
   const changeHandeler=(event)=>{
      setText((text)=> event.target.value)

      if(text){
         const resultSearch=cities.filter((city)=>city.toLowerCase().startsWith(text.toLowerCase()));
         setHint(resultSearch)
      }else{
         setHint([])
      }
      
   };
   return (
      <div>
         <Input text={text} setText={setText}  changeHandeler={changeHandeler} hint={hint} />
      </div>
   )
}

export default App;
