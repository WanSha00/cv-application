import { useState } from "react";
import "./styles/App.css";
import logoAddress from "./assets/map-marker-outline.svg";
import logoEmail from "./assets/email-outline.svg";
import logoWeb from "./assets/web.svg";
import logoPhone from "./assets/phone-outline.svg";
import deleteItem from "./assets/delete.svg";
import addItem from "./assets/plus.svg";
import openMenu from "./assets/menu-down.svg";

function App() {
  const [hidePersonal, setHidePersonal] = useState(false);
  const [hideSkills, setHideSkills] = useState(false);
  const [hideWork, setHideWork] = useState(false);
  const [hideEdu, setHideEdu] = useState(false);

  return (
    <>
      <div className="resume-builder">
        <div className="edit-form-container">
          <div className="personal-form">
            <form className="personal-details-form">
              <div className="formTitle">
                <div className="personal-details-title">Personal Details</div>
                <img
                  className="form-title-menu"
                  src={openMenu}
                  alt="personal menu"
                  onClick={() => setHidePersonal(!hidePersonal)}
                ></img>
              </div>

              <div className={hidePersonal ? "hide" : ""}>
                <div>
                  <label htmlFor="fullname">Full Name</label>
                  <input type="text" id="fullname"></input>
                </div>
                <div>
                  <label htmlFor="currentTitle">Current Title</label>
                  <input type="text" id="currentTitle"></input>
                </div>
                <div>
                  <label htmlFor="summary">Profile Summary</label>
                  <textarea id="summary" rows={4} cols={50}></textarea>
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address"></input>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email"></input>
                </div>
                <div>
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website"></input>
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone"></input>
                </div>
              </div>
            </form>
          </div>

          <div className="skills-form">
            <form className="skills-details-form">
              <div className="formTitle">
                <div className="skills-details-title">Skills</div>
                <img
                  className="form-title-menu"
                  src={openMenu}
                  alt="skills menu"
                  onClick={() => setHideSkills(!hideSkills)}
                ></img>
              </div>
              <div className={hideSkills ? "hide" : ""}>
                <div className="skill-label">
                  <div>
                    <label htmlFor="skill">Skill</label>
                    <input type="text" id="skill"></input>
                  </div>
                  <img
                    className="del-skill-btn"
                    src={deleteItem}
                    alt="delete skill"
                  ></img>
                </div>
                <div className="skill-label">
                  <div>
                    <label htmlFor="skill">Skill</label>
                    <input type="text" id="skill"></input>
                  </div>
                  <img
                    className="del-skill-btn"
                    src={deleteItem}
                    alt="delete skill"
                  ></img>
                </div>
                <img
                  className="add-skill-btn"
                  src={addItem}
                  alt="add skill"
                ></img>
              </div>
            </form>
          </div>

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
                <div>
                  <label htmlFor="jobRole">Role</label>
                  <input type="text" id="jobRole"></input>
                </div>
                <div>
                  <label htmlFor="jobDuration">Duration</label>
                  <input type="text" id="jobDuration"></input>
                </div>
                <div>
                  <label htmlFor="jobCompany">Company</label>
                  <input type="text" id="jobCompany"></input>
                </div>
                <div className="jobtask-label">
                  <div>
                    <label htmlFor="jobtask">Task</label>
                    <input type="text" id="jobtask"></input>
                  </div>
                  <img
                    className="del-task-btn"
                    src={deleteItem}
                    alt="delete task"
                  ></img>
                </div>
                <div className="jobtask-label">
                  <div>
                    <label htmlFor="jobtask">Task</label>
                    <input type="text" id="jobtask"></input>
                  </div>
                  <img
                    className="del-task-btn"
                    src={deleteItem}
                    alt="delete task"
                  ></img>
                </div>
                <img
                  className="add-task-btn"
                  src={addItem}
                  alt="add task"
                ></img>
              </div>

              <button
                className={
                  hideWork ? "submit-work-btn hide" : "submit-work-btn"
                }
              >
                Submit
              </button>
            </form>
          </div>

          <div className="edu-form">
            <form className="edu-details-form">
              <div className="formTitle">
                <div className="edu-details-title">Education</div>
                <img
                  className="form-title-menu"
                  src={openMenu}
                  alt="edu menu"
                  onClick={() => setHideEdu(!hideEdu)}
                ></img>
              </div>

              <div className={hideEdu ? "hide" : ""}>
                <div>
                  <label htmlFor="eduLevel">Education Level</label>
                  <input type="text" id="eduLevel"></input>
                </div>
                <div>
                  <label htmlFor="eduDuration">Duration</label>
                  <input type="text" id="eduDuration"></input>
                </div>
                <div>
                  <label htmlFor="eduLoc">Institution</label>
                  <input type="text" id="eduLoc"></input>
                </div>
              </div>
              <button
                className={hideEdu ? "submit-edu-btn hide" : "submit-edu-btn"}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="resume-container">
          <div className="header">
            <div className="info-fullname">
              <div>Heather Goldstein</div>
            </div>

            <div className="info-current-role">
              <div>Full Stack Developer</div>
            </div>
          </div>

          <div className="info-container">
            <div className="main-left">
              <div className="info-summary">
                <div className="summary-title">PROFILE</div>
                <div>
                  Creative-minded and detail-oriented individual with the
                  ability to adhere to established procedures and thrive and
                  learn on my own under little or no supervision. Seeking the
                  role of a Software Engineer at YYY Inc. to incorporate my
                  expertise in software design, application development and
                  quality assurance.
                </div>
              </div>

              <div className="info">
                <div>
                  <img
                    className="logo-img"
                    src={logoAddress}
                    alt="address"
                  ></img>
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

              <div className="info-line"></div>

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
            </div>

            <div className="main-right">
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
                        Designed, developed, and modified 25+ software systems
                        and custom components.
                      </li>
                      <li>
                        Integrated existing software into 13 upgraded, modified
                        systems for higher performance.
                      </li>
                      <li>
                        Planned, tracked, and managed deliverables on 200+
                        short-term sprints and 50+ long-term deployments.
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
                        Donec mauris massa, vulputate nec tincidunt a,
                        sollicitudin nec nisl. Cras ullamcorper tellus et dolor
                        hendrerit, in elementum erat rutrum.
                      </li>
                      <li>
                        Sed nec nisl vehicula, eleifend est consequat, fermentum
                        nisl. Aenean ut quam at odio venenatis malesuada.
                      </li>
                      <li>
                        Proin in mattis orci. Nunc posuere aliquet quam,
                        molestie fermentum justo tempus vel.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="info-line2"></div>

              <div className="info-education">
                <div className="edu-title">EDUCATION</div>

                <div className="edu-details">
                  <div className="edu-row1">
                    <div className="edu-name">B.S. Computer Science</div>
                    <div className="edu-duration">
                      September 2015 - June 2019
                    </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
