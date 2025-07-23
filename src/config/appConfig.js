// client/src/config/appConfig.js
export const FORCE_LOGIN_MODE = true; // Toggle this to enable/disable root login enforcement
export const REACT_APP_API_URL = "http://localhost:orient"; // Toggle this to enable/disable root login enforcement


// config to retrieve token from cookies
export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };
  
  export const checkUserToken = () => {
    const token = getCookie('authToken');  // Retrieve token from cookies
    if (token) {
      return true;
    }
    return false;
  };

// you created above code but you lost all dots so we start from here now 

// we create this file for toggle functionality there is two result i want 
// 
// first 1 
// if FORCE_LOGIN_MODE is false 
// user can go to anypage user want no need to log in he can navigate in all navlinks, but at the header we will show login button 

// second 2
// if FORCE_LOGIN_MODE is true
// then logics for find token which we will give him at time of succusfull log in , if user don't have token redirect to login page  
// in one function we write to access token from fornt end latter for now create this function and return false as user don't have token of log in get it ?

// Note:- we will discused logic about login/sign up latter when this functionality complete

// now if you understand above purpose explain to me how we will do this as road map 