import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

export const AuthContext = createContext<{
  user: any;
  setUser: React.Dispatch<any>;
} | null>(null);

interface UserContextProps {
  children: React.ReactNode;
}

const UserContext = ({ children }: UserContextProps) => {
  const secretKey =
    'e11adc41aa2be070cd926912c9fdef3be3e6d7194d4e4e63c359ff738db85070f812e87262cdbac49f3363c3405d59ba6928dd4e32e079593a03e69b9926c8b6';

  const getUserData = () => {
    const value = Cookies.get('userData');
    if (value) {
      const bytes = CryptoJS.AES.decrypt(value, secretKey as string);
      const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
      const userData = JSON.parse(decryptedValue);
      return userData;
    }
    return null;
  };

  const userData = getUserData();
  const [user, setUser] = useState(userData || null);

  const value = {
    user,
    setUser,
  };

  console.log(user);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserContext;
