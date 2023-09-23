import { useState } from "react";
import "./styles/App.css";
import EditForm from "./components/EditForm";
import ResumeDisplay from "./components/ResumeDisplay.jsx";

function App() {
  const [fullName, setFullName] = useState("Full Name");
  const [currentRole, setCurrentRole] = useState("Current Role");
  const [summary, setSummary] = useState("My profile summary...");
  const [address, setAddress] = useState("Address...");
  const [email, setEmail] = useState("email@google.com...");
  const [website, setWebsite] = useState("www.website.com...");
  const [phoneNo, setPhoneNo] = useState("+123 45 789");

  const [skillList, setSkillList] = useState([{ skill: "Skill 1" }]);
  const [eduList, setEduList] = useState([
    {
      level: "Education Level A",
      duration: "Month 2000 - Month 2000",
      institution: "Institution A",
    },
  ]);

  const [taskList, setTaskList] = useState([{ tasks: ["Task 1", "Task 2"] }]);

  const [workList, setWorkList] = useState([
    {
      role: "Role A",
      duration: "Month 2000 - Present",
      company: "Company A",
    },
  ]);

  return (
    <>
      <div className="resume-builder">
        <EditForm
          fullName={fullName}
          setFullName={setFullName}
          currentRole={currentRole}
          setCurrentRole={setCurrentRole}
          summary={summary}
          setSummary={setSummary}
          address={address}
          setAddress={setAddress}
          email={email}
          setEmail={setEmail}
          website={website}
          setWebsite={setWebsite}
          phoneNo={phoneNo}
          setPhoneNo={setPhoneNo}
          skillList={skillList}
          setSkillList={setSkillList}
          workList={workList}
          setWorkList={setWorkList}
          taskList={taskList}
          setTaskList={setTaskList}
          eduList={eduList}
          setEduList={setEduList}
        />
        <ResumeDisplay
          fullName={fullName}
          currentRole={currentRole}
          summary={summary}
          address={address}
          email={email}
          website={website}
          phoneNo={phoneNo}
          skillList={skillList}
          workList={workList}
          taskList={taskList}
          eduList={eduList}
        />
      </div>
    </>
  );
}

export default App;
