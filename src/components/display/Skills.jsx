function SkillDetails({ skill }) {
  return (
    <>
      <li>{skill}</li>
    </>
  );
}
function Skills({ skillList }) {
  return (
    <>
      <div className="info-skills">
        <div className="skills-title">SKILLS</div>

        <div>
          <ul>
            {skillList.map((skillDetail) => {
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
