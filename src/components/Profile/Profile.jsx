import NavBar from "../NavBar/NavBar";
import "./Profile.scss";
const Profile = () => {
  return <>
 <div className="profile-container">
        <div className="profile-header">
          <h1>Profil</h1>
        </div>
        <div className="profile-content">
          <div className="profile-picture">
            <img src="src\components\SVG\mac mussterman.jpg" alt="Profilbild" />
          </div>
          <div className="profile-info">
            <h2> Max Mustermann</h2>
            <p>Alter: 80</p>
            <p>Adresse: Musterstraße 123, 12345 Musterstadt</p>
          </div>
        </div>
      </div>
  <NavBar />
  </>;
};

export default Profile;
