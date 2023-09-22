import { useState } from "react";
import openMenu from "/src/assets/menu-down.svg";
import addItem from "/src/assets/plus.svg";
import deleteItem from "/src/assets/delete.svg";

function EduInput({ eduList, setEduList, id, val }) {
  const [hideInput, setHideInput] = useState(false);

  const handleEduRemove = (index) => {
    const list = [...eduList];
    list.splice(index, 1);
    setEduList(list);
  };

  const handleEduChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...eduList];
    list[index][name] = value;
    setEduList(list);
  };

  return (
    <>
      <div>
        <label htmlFor="eduLevel">Education Level</label>
        <input
          type="text"
          id="eduLevel"
          name="level"
          value={val.level}
          onChange={(e) => handleEduChange(e, id)}
        ></input>
      </div>
      <div className={hideInput ? "hide" : ""}>
        <div>
          <label htmlFor="eduDuration">Duration</label>
          <input
            type="text"
            id="eduDuration"
            name="duration"
            value={val.duration}
            onChange={(e) => handleEduChange(e, id)}
          ></input>
        </div>
        <div>
          <label htmlFor="eduLoc">Institution</label>
          <input
            type="text"
            id="eduLoc"
            name="institution"
            value={val.institution}
            onChange={(e) => handleEduChange(e, id)}
          ></input>
        </div>
        {eduList.length > 1 && (
          <img
            className="del-edu-btn"
            src={deleteItem}
            alt="delete edu"
            onClick={() => handleEduRemove(id)}
          ></img>
        )}
      </div>
      <img
        className="form-title-menu"
        src={openMenu}
        alt="edu input menu"
        onClick={() => setHideInput(!hideInput)}
      ></img>
    </>
  );
}
function EducationForm({ eduList, setEduList }) {
  const [hideEdu, setHideEdu] = useState(false);

  const handleEduAdd = () => {
    setEduList([
      ...eduList,
      {
        level: "",
        duration: "",
        institution: "",
      },
    ]);
  };

  return (
    <>
      <div className="edu-form">
        <form className="edu-details-form">
          <div className="formTitle">
            <div className="edu-details-title">Education</div>
            <img
              className="form-title-menu"
              src={openMenu}
              alt="edu menu"
              onClick={() => setHideEdu(!hideEdu)}
            ></img>
          </div>

          <div className={hideEdu ? "hide" : ""}>
            {eduList.map((singleEdu, index) => (
              <EduInput
                key={index}
                eduList={eduList}
                setEduList={setEduList}
                id={index}
                val={singleEdu}
              />
            ))}
            <div>
              <img
                className="add-edu-btn"
                src={addItem}
                alt="add edu"
                onClick={handleEduAdd}
              ></img>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EducationForm;
