import { useState } from "react";
import deleteItem from "/src/assets/delete.svg";
import addItem from "/src/assets/plus.svg";
import openMenu from "/src/assets/menu-down.svg";

function SkillInput() {
  const deleteSkill = () => {
    console.log("Delete skill.");
  };

  return (
    <>
      <div className="skill-label">
        <div>
          <label htmlFor="skill">Skill</label>
          <input type="text" id="skill"></input>
        </div>
        <img
          className="del-skill-btn"
          src={deleteItem}
          alt="delete skill"
          onClick={deleteSkill}
        ></img>
      </div>
    </>
  );
}

function SkillsForm() {
  const [hideSkills, setHideSkills] = useState(false);

  const addSkill = () => {
    console.log("Add skill.");
  };

  return (
    <>
      <div className="skills-form">
        <form className="skills-details-form">
          <div className="formTitle">
            <div className="skills-details-title">Skills</div>
            <img
              className="form-title-menu"
              src={openMenu}
              alt="skills menu"
              onClick={() => setHideSkills(!hideSkills)}
            ></img>
          </div>
          <div className={hideSkills ? "hide" : ""}>
            <SkillInput />
            <SkillInput />
            <img
              className="add-skill-btn"
              src={addItem}
              alt="add skill"
              onClick={addSkill}
            ></img>
          </div>
        </form>
      </div>
    </>
  );
}

export default SkillsForm;
