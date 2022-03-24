import React, {useState} from "react";
import "./App.css";
import SuperheroViewer from "../Superheros";
import Input from '../Input/index'

function App() {
//this is input text
 const [inputValue, setInputValue] = useState(89)

 //this if tracking the button click
 const [heroNumber, setHeroNumber] = useState(89)

    function handleClick() {
      setHeroNumber(inputValue)
    }
    
    const handleInputTextChange = (event) => {
        setInputValue(event.target.value)
    }

  return (
      <div className="App">
        <Input onClick={handleClick} onChange={handleInputTextChange}/>
          <SuperheroViewer heroNumber={heroNumber} />    
      </div>
  );
}

export default App;
