import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NewNavbar from "./components/NewNavbar";
import NewHero from "./components/NewHero";
import NewAbout from "./components/NewAbout";
import NewExperience from "./components/NewExperience";
import NewSkills from "./components/NewSkills";
import NewProjects from "./components/NewProjects";
import NewCertifications from "./components/NewCertifications";
import NewContact from "./components/NewContact";
import NewFooter from "./components/NewFooter";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NewNavbar />
        <NewHero />
        <NewAbout />
        <NewExperience />
        <NewSkills />
        <NewProjects />
        <NewCertifications />
        <NewContact />
        <NewFooter />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
