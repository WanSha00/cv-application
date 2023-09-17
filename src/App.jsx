import { useState } from "react";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="resume-builder">
        <div className="edit-form-container">
          <div className="personal-form">
            <form className="personal-details-form">
              <div className="personal-details-title">Personal Details</div>
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
                  Vestibulum ac fringilla tellus, sit amet pharetra dui. Cras
                  eget risus eu diam vulputate sodales. Etiam ut nisl dolor.
                  Aliquam vitae iaculis sapien. Ut egestas metus eget risus
                  auctor scelerisque. Maecenas rhoncus maximus tempor. Donec sit
                  amet gravida lacus, eu tincidunt odio. Vivamus ac scelerisque
                  nisi, a euismod mauris. Quisque quis pulvinar mauris.
                </div>
              </div>

              <div className="info">
                <div>11 Street, London</div>
                <div>marcsmith@gmail.com</div>
                <div>www.marc.com</div>
                <div>+355 123456789</div>
              </div>

              <div className="info-line"></div>

              <div className="info-education">
                <div className="edu-title">EDUCATION</div>

                <div className="edu-details">
                  <div className="edu-row1">
                    <div className="edu-name">Edu A</div>
                    <div className="edu-duration">2018 - 2019</div>
                  </div>
                  <div className="edu-place">Edu place name A, Location A</div>
                </div>

                <div className="edu-details">
                  <div className="edu-row1">
                    <div className="edu-name">Edu B</div>
                    <div className="edu-duration">2018 - 2019</div>
                  </div>
                  <div className="edu-place">Edu place name B, Location B</div>
                </div>
              </div>

              {/* <div className="info-line"></div> */}
            </div>

            <div className="main-right">
              <div className="info-work">
                <div className="work-title">WORK EXPERIENCE</div>

                <div className="job-details">
                  <div className="job-row1">
                    <div className="job-role">Job Role A</div>
                    <div className="job-duration">2019 - Present</div>
                  </div>
                  <div className="job-place">Company name A, Location A</div>
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

              <div className="info-skills">
                <div className="skills-title">SKILLS</div>

                <div>
                  <ul>
                    <li>Skill A</li>
                    <li>Skill B</li>
                    <li>Skill C</li>
                  </ul>
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
