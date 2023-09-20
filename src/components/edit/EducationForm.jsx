import { useState } from "react";
import openMenu from "/src/assets/menu-down.svg";

function EducationForm() {
  const [hideEdu, setHideEdu] = useState(false);

  const submitEdu = (e) => {
    e.preventDefault();
    console.log("Submit edu.");
  };

  return (
    <>
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
            onClick={submitEdu}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default EducationForm;
