// ProfilePhotoContext.js
import React, { createContext, useContext, useState } from 'react';

const ProfilePhotoContext = createContext();

export const ProfilePhotoProvider = ({ children }) => {
  const [profilePhoto, setProfilePhoto] = useState(require('../../../assets/user-icon.jpg'));

  const updateProfilePhoto = (newPhoto) => {
    setProfilePhoto(newPhoto);
  };

  return (
    <ProfilePhotoContext.Provider value={{ profilePhoto, updateProfilePhoto }}>
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = () => {
  return useContext(ProfilePhotoContext);
};