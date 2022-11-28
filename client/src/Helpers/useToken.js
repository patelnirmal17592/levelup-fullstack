import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  };

  // update the state when user log in
  const [token, setToken] = useState(getToken());
  
  // to take the user input object to create token
  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  // to avoid infinate loop when no user is log in
  const removeToken = () => {
    sessionStorage.removeItem('token');
  };

  return {
    unsetToken: removeToken,
    setToken: saveToken,
    token
  }
}