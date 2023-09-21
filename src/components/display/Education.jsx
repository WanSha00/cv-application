function EduDetails({ name, duration, place }) {
  return (
    <>
      <div className="edu-details">
        <div className="edu-row1">
          <div className="edu-name">{name}</div>
          <div className="edu-duration">{duration}</div>
        </div>
        <div className="edu-place">{place}</div>
      </div>
    </>
  );
}
function Education() {
  const eduDetails = [
    {
      name: "B.S. Computer Science",
      duration: "September 2015 - June 2019",
      place: "University of Tennessee, Knoxville, TN",
    },
    {
      name: "Edu B",
      duration: "2018 - 2019",
      place: "Edu place name B, Location B",
    },
  ];
  return (
    <>
      <div className="info-education">
        <div className="edu-title">EDUCATION</div>
        {eduDetails.map((eduDetail) => {
          return (
            <EduDetails
              key={crypto.randomUUID()}
              name={eduDetail.name}
              duration={eduDetail.duration}
              place={eduDetail.place}
            />
          );
        })}
      </div>
    </>
  );
}

export default Education;
