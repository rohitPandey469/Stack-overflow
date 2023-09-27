import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { fetchAllUsers } from "./users";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(fetchAllUsers());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const sentOtp = (emailData, navigate) => async (dispatch) => {
  try {
    const response = await api.sentOtp(emailData);
    if (response.status === 200) {
      navigate("/user/otp", { state: emailData.email });
    }
  } catch (error) {
    setTimeout(() => {
      return navigate("/Auth");
    }, 5000);
    console.log(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
