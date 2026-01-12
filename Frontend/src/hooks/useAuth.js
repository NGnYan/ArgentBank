import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout as logoutAction,
} from "../redux/userSlice";
import { loginUser, getUserProfile } from "../services/api";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );

  const login = async (email, password, rememberMe = false) => {
    dispatch(loginStart());

    try {
      const data = await loginUser(email, password);
      const { token } = data;
      const userProfile = await getUserProfile(token);

      dispatch(loginSuccess({ token, user: userProfile }));

      if (rememberMe) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userProfile));
      } else {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(userProfile));
      }

      navigate("/profile");
      return { success: true, user: userProfile };
    } catch (error) {
      dispatch(loginFailure(error.message || "Login failed"));
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    dispatch(logoutAction());

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
  };
};
