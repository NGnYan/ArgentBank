import "../styles/components/ProfileHeader.css";

function ProfileHeader({ firstName, lastName }) {
  return (
    <div className="header-profile">
      <h1 className="welcome-message">
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default ProfileHeader;
