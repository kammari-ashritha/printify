import React from 'react';
import { useAuth } from '../../context/AuthContext';

const ProfileSettings = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <h2>Profile & Settings</h2>
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" defaultValue={currentUser.name} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" defaultValue={currentUser.email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input type="password" id="password" placeholder="Leave blank to keep current password" />
        </div>
        <button type="button" className="save-btn" onClick={() => alert('Profile updated! (Simulation)')}>Save Changes</button>
      </form>
    </div>
  );
};
export default ProfileSettings;