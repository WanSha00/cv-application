import logoAddress from "../assets/map-marker-outline.svg";
import logoEmail from "../assets/email-outline.svg";
import logoWeb from "../assets/web.svg";
import logoPhone from "../assets/phone-outline.svg";

function FullName() {
  return (
    <>
      <div className="info-fullname">
        <div>Heather Goldstein</div>
      </div>
    </>
  );
}

function CurrentRole() {
  return (
    <>
      <div className="info-current-role">
        <div>Full Stack Developer</div>
      </div>
    </>
  );
}

function ProfileSummary() {
  return (
    <>
      <div className="info-summary">
        <div className="summary-title">PROFILE</div>
        <div>
          Creative-minded and detail-oriented individual with the ability to
          adhere to established procedures and thrive and learn on my own under
          little or no supervision. Seeking the role of a Software Engineer at
          YYY Inc. to incorporate my expertise in software design, application
          development and quality assurance.
        </div>
      </div>
    </>
  );
}

function Contacts() {
  return (
    <>
      <div className="contacts">
        <div>
          <img className="logo-img" src={logoAddress} alt="address"></img>
          <div>11th St.Rose, London</div>
        </div>

        <div>
          <img className="logo-img" src={logoEmail} alt="email"></img>
          <div>heathergoldstein@gmail.com</div>
        </div>

        <div>
          <img className="logo-img" src={logoWeb} alt="website"></img>
          <div>www.heatherstein.com</div>
        </div>

        <div>
          <img className="logo-img" src={logoPhone} alt="phone"></img>
          <div>+355 123456789</div>
        </div>
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <div className="info-skills">
        <div className="skills-title">SKILLS</div>

        <div>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Rest APIs</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function WorkExperience() {
  return (
    <>
      <div className="info-work">
        <div className="work-title">WORK EXPERIENCE</div>

        <div className="job-details">
          <div className="job-row1">
            <div className="job-role">Full Stack Developer</div>
            <div className="job-duration">August 2020 - Present</div>
          </div>
          <div className="job-place">Deloitte, Nashville, TN</div>

          <div className="job-tasks">
            <ul>
              <li>
                Designed, developed, and modified 25+ software systems and
                custom components.
              </li>
              <li>
                Integrated existing software into 13 upgraded, modified systems
                for higher performance.
              </li>
              <li>
                Planned, tracked, and managed deliverables on 200+ short-term
                sprints and 50+ long-term deployments.
              </li>
            </ul>
          </div>
        </div>

        <div className="job-details">
          <div className="job-row1">
            <div className="job-role">Job Role B</div>
            <div className="job-duration">2018 - 2019</div>
          </div>
          <div className="job-place">Company name B, Location B</div>
          <div className="job-tasks">
            <ul>
              <li>
                Donec mauris massa, vulputate nec tincidunt a, sollicitudin nec
                nisl. Cras ullamcorper tellus et dolor hendrerit, in elementum
                erat rutrum.
              </li>
              <li>
                Sed nec nisl vehicula, eleifend est consequat, fermentum nisl.
                Aenean ut quam at odio venenatis malesuada.
              </li>
              <li>
                Proin in mattis orci. Nunc posuere aliquet quam, molestie
                fermentum justo tempus vel.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function Education() {
  return (
    <>
      <div className="info-education">
        <div className="edu-title">EDUCATION</div>

        <div className="edu-details">
          <div className="edu-row1">
            <div className="edu-name">B.S. Computer Science</div>
            <div className="edu-duration">September 2015 - June 2019</div>
          </div>
          <div className="edu-place">
            University of Tennessee, Knoxville, TN
          </div>
        </div>

        <div className="edu-details">
          <div className="edu-row1">
            <div className="edu-name">Edu B</div>
            <div className="edu-duration">2018 - 2019</div>
          </div>
          <div className="edu-place">Edu place name B, Location B</div>
        </div>
      </div>
    </>
  );
}

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
