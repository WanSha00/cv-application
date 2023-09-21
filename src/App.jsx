import { useState } from "react";
import "./styles/App.css";
import EditForm from "./components/EditForm";
import ResumeDisplay from "./components/ResumeDisplay.jsx";

function App() {
  const [skillList, setSkillList] = useState([{ skill: "" }]);

  return (
    <>
      <div className="resume-builder">
        <EditForm skillList={skillList} setSkillList={setSkillList} />
        <ResumeDisplay skillList={skillList} />
      </div>
    </>
  );
}

export default App;
