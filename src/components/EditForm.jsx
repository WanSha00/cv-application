import PersonalForm from "./edit/PersonalForm";
import SkillsForm from "./edit/SkillsForm";
import WorkForm from "./edit/WorkForm";
import EducationForm from "./edit/EducationForm";

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
  return (
    <>
      <div className="edit-form-container">
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
        <SkillsForm skillList={skillList} setSkillList={setSkillList} />
        <WorkForm
          workList={workList}
          setWorkList={setWorkList}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <EducationForm eduList={eduList} setEduList={setEduList} />
      </div>
    </>
  );
}

export default EditForm;
