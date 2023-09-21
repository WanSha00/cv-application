function WorkDetails({ role, duration, company, tasks }) {
  const renderTask = tasks.map((item) => (
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
function WorkExperience() {
  const workDetails = [
    {
      role: "Full Stack Developer",
      duration: "August 2020 - Present",
      company: "Deloitte, Nashville, TN",
      tasks: [
        "Designed, developed, and modified 25+ software systems and custom components.",
        "Integrated existing software into 13 upgraded, modified systems for higher performance.",
        "Planned, tracked, and managed deliverables on 200+ short-term sprints and 50+ long-term deployments.",
      ],
    },
    {
      role: "Job Role B",
      duration: "2018 - 2019",
      company: "Company name B, Location B",
      tasks: [
        " Donec mauris massa, vulputate nec tincidunt a, sollicitudin necnisl. Cras ullamcorper tellus et dolor hendrerit, in elementum erat rutrum.",
        "Sed nec nisl vehicula, eleifend est consequat, fermentum nisl. Aenean ut quam at odio venenatis malesuada.",
        "Proin in mattis orci. Nunc posuere aliquet quam, molestie fermentum justo tempus vel.",
      ],
    },
  ];

  return (
    <>
      <div className="info-work">
        <div className="work-title">WORK EXPERIENCE</div>

        {workDetails.map((workDetail) => {
          return (
            <WorkDetails
              key={crypto.randomUUID()}
              role={workDetail.role}
              duration={workDetail.duration}
              company={workDetail.company}
              tasks={workDetail.tasks}
            />
          );
        })}
      </div>
    </>
  );
}

export default WorkExperience;
