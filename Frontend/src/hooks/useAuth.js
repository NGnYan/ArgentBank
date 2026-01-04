import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout as logoutAction,
} from "../userSlice";
import { loginUser, getUserProfile } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );

  const login = async (email, password) => {
    dispatch(loginStart());

    try {
      const data = await loginUser(email, password);
      const { token } = data;

      const userProfile = await getUserProfile(token);

      dispatch(
        loginSuccess({
          token: token,
          user: userProfile,
        })
      );

      navigate("/profile");

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userProfile));

      return { success: true, user: userProfile };
    } catch (error) {
      dispatch(loginFailure(error.message || "Login failed"));
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    dispatch(logoutAction());
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
