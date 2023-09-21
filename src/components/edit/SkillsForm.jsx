import { useState } from "react";
import deleteItem from "/src/assets/delete.svg";
import addItem from "/src/assets/plus.svg";
import openMenu from "/src/assets/menu-down.svg";

function SkillInput({ skillList, setSkillList, id, val }) {
  const handleSkillRemove = (index) => {
    const list = [...skillList];
    list.splice(index, 1);
    setSkillList(list);
  };

  const handleSkillChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...skillList];
    list[index][name] = value;
    setSkillList(list);
  };

  return (
    <>
      <div className="skill-label">
        <div>
          <label htmlFor="skill">Skill</label>
          <input
            name="skill"
            type="text"
            id="skill"
            value={val.skill}
            onChange={(e) => handleSkillChange(e, id)}
          ></input>
        </div>
        {skillList.length > 1 && (
          <img
            className="del-skill-btn"
            src={deleteItem}
            alt="delete skill"
            onClick={() => handleSkillRemove(id)}
          ></img>
        )}
      </div>
    </>
  );
}

function SkillsForm({ skillList, setSkillList }) {
  const [hideSkills, setHideSkills] = useState(false);

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
              <SkillInput
                key={index}
                skillList={skillList}
                setSkillList={setSkillList}
                id={index}
                val={singleSkill}
              />
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
