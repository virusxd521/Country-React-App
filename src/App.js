import { Routes, Route } from "react-router-dom";
import Body from './components/Body';
import './App.css';
import IndividualCountry from "./components/IndividualCountry";
import { useState } from "react";


function App() {
  
  // Setting the dark mode to true or false depend on the status
  const [darkMode, setDarkMode] = useState(false);
  
      // toggling the darkmode function
    const darkToggle = () => {
        setDarkMode(current_mode => !current_mode);
    }   



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body chaningMode={darkToggle} darkMode={darkMode} />} />
        {/* in here we defined the name of the key in the Object */}
        <Route path=":country" element={<IndividualCountry
        darkMode={darkMode}  
          chaningMode={darkToggle}
        />} />
      </Routes>
    </div>
  );
}

export default App;
