import { useState } from "react";
import deleteItem from "/src/assets/delete.svg";
import addItem from "/src/assets/plus.svg";
import openMenu from "/src/assets/menu-down.svg";

function TaskInput() {
  const deleteTask = () => {
    console.log("Delete task.");
  };

  return (
    <>
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
            <TaskInput />
            <TaskInput />
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

export default WorkForm;
