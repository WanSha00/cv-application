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
        <WorkForm />
        <EducationForm />
      </div>
    </>
  );
}

export default EditForm;
