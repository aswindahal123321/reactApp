import "./App.css";
import About from "./components/About";
import TextForm from "./components/TextForm"
import Contact from "./components/Contact";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (alertMessage, alertStatus) => {
    setAlert({
      alertMessage: alertMessage,
      alertStatus: alertStatus,
    });
  };

  setTimeout(() => {
    setAlert();
  }, 2000);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#333";
      showAlert("Light Mode is enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "white";
      showAlert("Dark Mode is enabled", "success");
    }
  };
  return (
    <>
    <BrowserRouter>
    <Navbar
        title="Textutils"
        modeName={mode}
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
