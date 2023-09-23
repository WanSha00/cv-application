import { useState } from "react";
import deleteItem from "/src/assets/delete.svg";
import addItem from "/src/assets/plus.svg";
import openMenu from "/src/assets/menu-down.svg";
import addTask from "/src/assets/plus-circle-outline.svg";
import deleteTaskItem from "/src/assets/minus-circle-outline.svg";

function TaskInput({ workId, id, val, taskList, setTaskList }) {
  const handleTaskRemove = (index) => {
    const list = [...taskList];
    list[workId]["tasks"].splice(index, 1);
    setTaskList(list);
  };

  const handleTaskChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...taskList];
    list[workId]["tasks"][index] = value;
    setTaskList(list);
  };

  const totalTasks = taskList[workId]["tasks"];

  return (
    <>
      <div className="jobtask-label">
        <div>
          <label htmlFor="jobtask">Task</label>
          <input
            type="text"
            id="jobtask"
            name="task"
            value={val}
            onChange={(e) => handleTaskChange(e, id)}
          ></input>
        </div>
        {totalTasks.length > 1 && (
          <img
            className="del-task-btn"
            src={deleteTaskItem}
            alt="delete task"
            onClick={() => handleTaskRemove(id)}
          ></img>
        )}
      </div>
    </>
  );
}

function WorkInput({ workList, setWorkList, taskList, setTaskList, id, val }) {
  const task = taskList[id].tasks;
  const [hideInput, setHideInput] = useState(false);

  const handleWorkChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...workList];
    list[index][name] = value;
    setWorkList(list);
  };

  const handleWorkRemove = (index) => {
    const list = [...workList];
    list.splice(index, 1);
    setWorkList(list);

    const tlist = [...taskList];
    tlist.splice(index, 1);
    setTaskList(tlist);
  };

  const handleTaskAdd = (index) => {
    const list = [...taskList];
    let currentTask = list[index]["tasks"];

    list[index]["tasks"] = [...currentTask, ""];
    setTaskList(list);
  };

  return (
    <>
      <div>
        <label htmlFor="jobRole">Role</label>
        <input
          type="text"
          id="jobRole"
          name="role"
          value={val.role}
          onChange={(e) => handleWorkChange(e, id)}
        ></input>
      </div>
      <div className={hideInput ? "hide" : ""}>
        <div>
          <label htmlFor="jobDuration">Duration</label>
          <input
            type="text"
            id="jobDuration"
            name="duration"
            value={val.duration}
            onChange={(e) => handleWorkChange(e, id)}
          ></input>
        </div>
        <div>
          <label htmlFor="jobCompany">Company</label>
          <input
            type="text"
            id="jobCompany"
            name="company"
            value={val.company}
            onChange={(e) => handleWorkChange(e, id)}
          ></input>
        </div>
        {task.map((singleTask, index) => (
          <TaskInput
            key={index}
            workId={id}
            id={index}
            val={singleTask}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
        <img
          className="add-task-btn"
          src={addTask}
          alt="add task"
          onClick={(e) => handleTaskAdd(id)}
        ></img>
        {workList.length > 1 && (
          <div>
            <img
              className="del-work-btn"
              src={deleteItem}
              alt="delete work"
              onClick={() => handleWorkRemove(id)}
            ></img>
          </div>
        )}
      </div>

      <img
        className="form-title-menu"
        src={openMenu}
        alt="work input menu"
        onClick={() => setHideInput(!hideInput)}
      ></img>
    </>
  );
}

function WorkForm({ workList, setWorkList, taskList, setTaskList }) {
  const [hideWork, setHideWork] = useState(false);

  const handleWorkAdd = () => {
    setWorkList([
      ...workList,
      {
        role: "Role ...",
        duration: "Start - End",
        company: "Company...",
      },
    ]);

    setTaskList([...taskList, { tasks: ["A", "B"] }]);
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
            {workList.map((singleWork, index) => (
              <WorkInput
                key={index}
                workList={workList}
                setWorkList={setWorkList}
                taskList={taskList}
                setTaskList={setTaskList}
                id={index}
                val={singleWork}
              />
            ))}
            <div>
              <img
                className="add-work-btn"
                src={addItem}
                alt="add work"
                onClick={handleWorkAdd}
              ></img>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default WorkForm;
