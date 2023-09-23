import FullName from "./display/FullName";
import CurrentRole from "./display/CurrentRole";
import ProfileSummary from "./display/ProfileSummary";
import Contacts from "./display/Contacts";
import Skills from "./display/Skills";
import WorkExperience from "./display/WorkExperience";
import Education from "./display/Education";

function ResumeDisplay({
  fullName,
  currentRole,
  summary,
  address,
  email,
  website,
  phoneNo,
  skillList,
  workList,
  taskList,
  eduList,
}) {
  return (
    <>
      <div className="resume-container">
        <div className="header">
          <FullName fullName={fullName} />
          <CurrentRole currentRole={currentRole} />
        </div>

        <div className="info-container">
          <div className="main-left">
            <ProfileSummary summary={summary} />
            <Contacts
              address={address}
              email={email}
              website={website}
              phoneNo={phoneNo}
            />
            <div className="info-line"></div>
            <Skills skillList={skillList} />
          </div>

          <div className="main-right">
            <WorkExperience workList={workList} taskList={taskList} />
            <div className="info-line2"></div>
            <Education eduList={eduList} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeDisplay;
