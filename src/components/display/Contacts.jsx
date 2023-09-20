import logoAddress from "/src/assets/map-marker-outline.svg";
import logoEmail from "/src/assets/email-outline.svg";
import logoWeb from "/src/assets/web.svg";
import logoPhone from "/src/assets/phone-outline.svg";

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

export default Contacts;
