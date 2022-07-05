// Hook
import { useEffect } from "react";
import useAuth from "./useAuth.js";
import { useNavigate } from "react-router-dom"

const useRequireAuth = (redirectUrl = "/signup") => {
  const auth = useAuth();
  const navigate = useNavigate();
  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.user === false) {
      navigate(redirectUrl);
    }
  }, [auth, navigate]);
  return auth;
}

export default useRequireAuth