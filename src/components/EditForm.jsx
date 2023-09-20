import { useState } from "react";
import deleteItem from "../assets/delete.svg";
import addItem from "../assets/plus.svg";
import openMenu from "../assets/menu-down.svg";

function PersonalForm() {
  const [hidePersonal, setHidePersonal] = useState(false);

  return (
    <>
      <div className="personal-form">
        <form className="personal-details-form">
          <div className="formTitle">
            <div className="personal-details-title">Personal Details</div>
            <img
              className="form-title-menu"
              src={openMenu}
              alt="personal menu"
              onClick={() => setHidePersonal(!hidePersonal)}
            ></img>
          </div>

          <div className={hidePersonal ? "hide" : ""}>
            <div>
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname"></input>
            </div>
            <div>
              <label htmlFor="currentTitle">Current Title</label>
              <input type="text" id="currentTitle"></input>
            </div>
            <div>
              <label htmlFor="summary">Profile Summary</label>
              <textarea id="summary" rows={4} cols={50}></textarea>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input type="text" id="address"></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"></input>
            </div>
            <div>
              <label htmlFor="website">Website</label>
              <input type="text" id="website"></input>
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function SkillsForm() {
  const [hideSkills, setHideSkills] = useState(false);

  const addSkill = () => {
    console.log("Add skill.");
  };

  const deleteSkill = () => {
    console.log("Delete skill.");
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
            {/* <div className="skill-label">
                    <div>
                      <label htmlFor="skill">Skill</label>
                      <input type="text" id="skill"></input>
                    </div>
                    <img
                      className="del-skill-btn"
                      src={deleteItem}
                      alt="delete skill"
                    ></img>
                  </div> */}
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

function WorkForm() {
  const [hideWork, setHideWork] = useState(false);

  const submitWork = (e) => {
    e.preventDefault();
    console.log("Submit work.");
  };

  const addTask = () => {
    console.log("Add task.");
  };

  const deleteTask = () => {
    console.log("Delete task.");
  };

  return (
    <>
      <div className="work-form">
        <form className="work-details-form">
          <div className="formTitle">
            <div className="work-details-title">Work Experience</div>
            <img
              className="form-title-menu"
              src={openMenu}
              alt="work menu"
              onClick={() => setHideWork(!hideWork)}
            ></img>
          </div>
          <div className={hideWork ? "hide" : ""}>
            <div>
              <label htmlFor="jobRole">Role</label>
              <input type="text" id="jobRole"></input>
            </div>
            <div>
              <label htmlFor="jobDuration">Duration</label>
              <input type="text" id="jobDuration"></input>
            </div>
            <div>
              <label htmlFor="jobCompany">Company</label>
              <input type="text" id="jobCompany"></input>
            </div>
            <div className="jobtask-label">
              <div>
                <label htmlFor="jobtask">Task</label>
                <input type="text" id="jobtask"></input>
              </div>
              <img
                className="del-task-btn"
                src={deleteItem}
                alt="delete task"
                onClick={deleteTask}
              ></img>
            </div>
            {/* <div className="jobtask-label">
                    <div>
                      <label htmlFor="jobtask">Task</label>
                      <input type="text" id="jobtask"></input>
                    </div>
                    <img
                      className="del-task-btn"
                      src={deleteItem}
                      alt="delete task"
                    ></img>
                  </div> */}
            <img
              className="add-task-btn"
              src={addItem}
              alt="add task"
              onClick={addTask}
            ></img>
          </div>

          <button
            className={hideWork ? "submit-work-btn hide" : "submit-work-btn"}
            onClick={submitWork}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

function EduForm() {
  const [hideEdu, setHideEdu] = useState(false);

  const submitEdu = (e) => {
    e.preventDefault();
    console.log("Submit edu.");
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
            <div>
              <label htmlFor="eduLevel">Education Level</label>
              <input type="text" id="eduLevel"></input>
            </div>
            <div>
              <label htmlFor="eduDuration">Duration</label>
              <input type="text" id="eduDuration"></input>
            </div>
            <div>
              <label htmlFor="eduLoc">Institution</label>
              <input type="text" id="eduLoc"></input>
            </div>
          </div>
          <button
            className={hideEdu ? "submit-edu-btn hide" : "submit-edu-btn"}
            onClick={submitEdu}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

function EditForm() {
  return (
    <>
      <div className="edit-form-container">
        <PersonalForm />
        <SkillsForm />
        <WorkForm />
        <EduForm />
      </div>
    </>
  );
}

export default EditForm;
