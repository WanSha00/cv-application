function WorkDetails({ role, duration, company, tasks, index }) {
  const task = tasks[index].tasks;
  const renderTask = task.map((item) => (
    <li key={crypto.randomUUID()}>{item}</li>
  ));

  return (
    <>
      <div className="job-details">
        <div className="job-row1">
          <div className="job-role">{role}</div>
          <div className="job-duration">{duration}</div>
        </div>
        <div className="job-place">{company}</div>

        <div className="job-tasks">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
}
function WorkExperience({ workList, taskList }) {
  return (
    <>
      <div className="info-work">
        <div className="work-title">WORK EXPERIENCE</div>

        {workList.map((workDetail, index) => {
          return (
            <WorkDetails
              key={crypto.randomUUID()}
              role={workDetail.role}
              duration={workDetail.duration}
              company={workDetail.company}
              tasks={taskList}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default WorkExperience;
