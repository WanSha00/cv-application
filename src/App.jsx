import { useState } from "react";
import "./styles/App.css";
import EditForm from "./components/EditForm";
import ResumeDisplay from "./components/ResumeDisplay.jsx";

function App() {
  const [fullName, setFullName] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [summary, setSummary] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [skillList, setSkillList] = useState([{ skill: "" }]);
  const [eduList, setEduList] = useState([
    {
      level: "",
      duration: "",
      institution: "",
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
          eduList={eduList}
        />
      </div>
    </>
  );
}

export default App;
