import { useState } from "react";
import openMenu from "/src/assets/menu-down.svg";

function PersonalForm({
  fullName,
  setFullName,
  currentRole,
  setCurrentRole,
  summary,
  setSummary,
  address,
  setAddress,
  email,
  setEmail,
  website,
  setWebsite,
  phoneNo,
  setPhoneNo,
}) {
  const [hidePersonal, setHidePersonal] = useState(false);

  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleCurrentRoleChange = (e) => {
    setCurrentRole(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

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
              <input
                type="text"
                id="fullname"
                value={fullName}
                onChange={(e) => handleNameChange(e)}
              ></input>
            </div>
            <div>
              <label htmlFor="currentTitle">Current Role</label>
              <input
                type="text"
                id="currentTitle"
                value={currentRole}
                onChange={(e) => handleCurrentRoleChange(e)}
              ></input>
            </div>
            <div>
              <label htmlFor="summary">Profile Summary</label>
              <textarea
                id="summary"
                rows={4}
                cols={50}
                value={summary}
                onChange={(e) => handleSummaryChange(e)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => handleAddressChange(e)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => handleEmailChange(e)}
              ></input>
            </div>
            <div>
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                value={website}
                onChange={(e) => handleWebsiteChange(e)}
              ></input>
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                value={phoneNo}
                onChange={(e) => handlePhoneNoChange(e)}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonalForm;
