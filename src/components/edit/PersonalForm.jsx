import { useState } from "react";
import openMenu from "/src/assets/menu-down.svg";

function PersonalForm() {
  const [hidePersonal, setHidePersonal] = useState(false);

  return (
    <>
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
    </>
  );
}

export default PersonalForm;
