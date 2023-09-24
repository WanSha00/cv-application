import PersonalForm from "./edit/PersonalForm";
import SkillsForm from "./edit/SkillsForm";
import WorkForm from "./edit/WorkForm";
import EducationForm from "./edit/EducationForm";
import { useState } from "react";

function EditForm({
  fullName,
  setFullName,
  currentRole,
  setCurrentRole,
  summary,
  setSummary,
  address,
  setAddress,
  email,
  setEmail,
  website,
  setWebsite,
  phoneNo,
  setPhoneNo,
  skillList,
  setSkillList,
  workList,
  setWorkList,
  taskList,
  setTaskList,
  eduList,
  setEduList,
}) {
  const [menuActive, setMenuActive] = useState({
    personal: true,
    skills: true,
    work: true,
    edu: true,
  });

  return (
    <>
      <div className="edit-form-container">
        <div className="menu-btn">
          <button
            className={
              menuActive.personal &&
              menuActive.skills &&
              menuActive.work &&
              menuActive.edu
                ? "menu-active"
                : ""
            }
            onClick={() =>
              setMenuActive({
                personal: true,
                skills: true,
                work: true,
                edu: true,
              })
            }
          >
            All
          </button>
          <button
            className={menuActive.personal ? "menu-active" : ""}
            onClick={() =>
              setMenuActive({
                personal: true,
                skills: false,
                work: false,
                edu: false,
              })
            }
          >
            Personal Details
          </button>
          <button
            className={menuActive.skills ? "menu-active" : ""}
            onClick={() =>
              setMenuActive({
                personal: false,
                skills: true,
                work: false,
                edu: false,
              })
            }
          >
            Skills
          </button>
          <button
            className={menuActive.work ? "menu-active" : ""}
            onClick={() =>
              setMenuActive({
                personal: false,
                skills: false,
                work: true,
                edu: false,
              })
            }
          >
            Work Experience
          </button>
          <button
            className={menuActive.edu ? "menu-active" : ""}
            onClick={() =>
              setMenuActive({
                personal: false,
                skills: false,
                work: false,
                edu: true,
              })
            }
          >
            Education
          </button>
        </div>
        {menuActive.personal && (
          <PersonalForm
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
          />
        )}

        {menuActive.skills && (
          <SkillsForm skillList={skillList} setSkillList={setSkillList} />
        )}

        {menuActive.work && (
          <WorkForm
            workList={workList}
            setWorkList={setWorkList}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        )}

        {menuActive.edu && (
          <EducationForm eduList={eduList} setEduList={setEduList} />
        )}
      </div>
    </>
  );
}

export default EditForm;
