import PersonalForm from "./edit/PersonalForm";
import SkillsForm from "./edit/SkillsForm";
import WorkForm from "./edit/WorkForm";
import EducationForm from "./edit/EducationForm";

function EditForm({ skillList, setSkillList }) {
  return (
    <>
      <div className="edit-form-container">
        <PersonalForm />
        <SkillsForm skillList={skillList} setSkillList={setSkillList} />
        <WorkForm />
        <EducationForm />
      </div>
    </>
  );
}

export default EditForm;
