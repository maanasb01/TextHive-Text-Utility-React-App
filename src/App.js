import "./App.css";
import Navbar from "./components/Navbar.js";
import Textbox from "./components/Textbox";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About'
import ErrorPage from "./ErrorPage";



function App() {
  const [isDark, setDark] = useState(false);
  const [alert, setAlert] = useState(null); //alert is an object here

  function customiseAlert(type, msg) {
    setAlert({
      alertType: type, //The keys here should be equal to the keys of the alert object in Alert.js
      alertMsg: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleMode() {
    if (isDark) {
      setDark(false);
      document.body.style.backgroundColor = "white";
    } else {
      setDark(true);
      document.body.style.backgroundColor = "#0b2237";
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={isDark} toToggle={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">

        <Routes>

        
          <Route exact path="/" element={<Textbox
              setAlertType={customiseAlert}
              heading="Enter Your Text Here:"
              mode={isDark}
            />}   />
            <Route exact path="Home/" element={<Textbox
              setAlertType={customiseAlert}
              heading="Enter Your Text Here:"
              mode={isDark}
            />}   />
            
          <Route exact path="About/" element={<About mode={isDark}/>}  />

          <Route  path="/*" element={<ErrorPage/>}  />



          
            
          


        </Routes>
        </div>
        


      </BrowserRouter>
    </>
  );
}

export default App;
