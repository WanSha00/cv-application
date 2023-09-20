import FullName from "./display/FullName";
import CurrentRole from "./display/CurrentRole";
import ProfileSummary from "./display/ProfileSummary";
import Contacts from "./display/Contacts";
import Skills from "./display/Skills";
import WorkExperience from "./display/WorkExperience";
import Education from "./display/Education";

function ResumeDisplay() {
  return (
    <>
      <div className="resume-container">
        <div className="header">
          <FullName />
          <CurrentRole />
        </div>

        <div className="info-container">
          <div className="main-left">
            <ProfileSummary />
            <Contacts />
            <div className="info-line"></div>
            <Skills />
          </div>

          <div className="main-right">
            <WorkExperience />
            <div className="info-line2"></div>
            <Education />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeDisplay;
