import logoAddress from "/src/assets/map-marker-outline.svg";
import logoEmail from "/src/assets/email-outline.svg";
import logoWeb from "/src/assets/web.svg";
import logoPhone from "/src/assets/phone-outline.svg";

function Contacts({ address, email, website, phoneNo }) {
  return (
    <>
      <div className="contacts">
        <div>
          <img className="logo-img" src={logoAddress} alt="address"></img>
          <div>{address}</div>
        </div>

        <div>
          <img className="logo-img" src={logoEmail} alt="email"></img>
          <div>{email}</div>
        </div>

        <div>
          <img className="logo-img" src={logoWeb} alt="website"></img>
          <div>{website}</div>
        </div>

        <div>
          <img className="logo-img" src={logoPhone} alt="phone"></img>
          <div>{phoneNo}</div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
