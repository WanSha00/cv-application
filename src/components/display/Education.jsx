function EduDetails({ level, duration, institution }) {
  return (
    <>
      <div className="edu-details">
        <div className="edu-row1">
          <div className="edu-name">{level}</div>
          <div className="edu-duration">{duration}</div>
        </div>
        <div className="edu-place">{institution}</div>
      </div>
    </>
  );
}
function Education({ eduList }) {
  return (
    <>
      <div className="info-education">
        <div className="edu-title">EDUCATION</div>
        {eduList.map((eduDetail) => {
          return (
            <EduDetails
              key={crypto.randomUUID()}
              level={eduDetail.level}
              duration={eduDetail.duration}
              institution={eduDetail.institution}
            />
          );
        })}
      </div>
    </>
  );
}

export default Education;
