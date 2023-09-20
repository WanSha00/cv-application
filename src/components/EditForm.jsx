import PersonalForm from "./edit/PersonalForm";
import SkillsForm from "./edit/SkillsForm";
import WorkForm from "./edit/WorkForm";
import EducationForm from "./edit/EducationForm";

function EditForm() {
  return (
    <>
      <div className="edit-form-container">
        <PersonalForm />
        <SkillsForm />
        <WorkForm />
        <EducationForm />
      </div>
    </>
  );
}

export default EditForm;
