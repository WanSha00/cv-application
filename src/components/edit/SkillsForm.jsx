import { useState } from "react";
import deleteItem from "/src/assets/delete.svg";
import addItem from "/src/assets/plus.svg";
import openMenu from "/src/assets/menu-down.svg";

function SkillInput({ skillList }) {
  const [newSkill, setNewSkill] = useState("");

  const deleteSkill = () => {
    console.log("Delete skill.");
  };

  return (
    <>
      <div className="skill-label">
        <div>
          <label htmlFor="skill">Skill</label>
          <input
            type="text"
            id="skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          ></input>
        </div>
        {skillList.length > 1 && (
          <img
            className="del-skill-btn"
            src={deleteItem}
            alt="delete skill"
            onClick={deleteSkill}
          ></img>
        )}
      </div>
    </>
  );
}

function SkillsForm() {
  const [hideSkills, setHideSkills] = useState(false);
  const [skillList, setSkillList] = useState([{ skill: "" }]);

  const handleSkillAdd = () => {
    setSkillList([...skillList, { skill: "" }]);
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
            {skillList.map((singleSkill, index) => (
              <SkillInput key={index} skillList={skillList} />
            ))}
            <img
              className="add-skill-btn"
              src={addItem}
              alt="add skill"
              onClick={handleSkillAdd}
            ></img>
          </div>
        </form>
      </div>
    </>
  );
}

export default SkillsForm;
