function SkillDetails({ skill }) {
  return (
    <>
      <li>{skill}</li>
    </>
  );
}
function Skills() {
  const skillDetails = [
    {
      skill: "JavaScript",
    },
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
  ];

  return (
    <>
      <div className="info-skills">
        <div className="skills-title">SKILLS</div>

        <div>
          <ul>
            {skillDetails.map((skillDetail) => {
              return (
                <SkillDetails
                  key={crypto.randomUUID()}
                  skill={skillDetail.skill}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
