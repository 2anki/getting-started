import axios from "axios";
import Cookies from "universal-cookie";

export const logout = async () => {
  localStorage.clear();
  sessionStorage.clear();
  try {
    const endpoint = `/api/users/logout`;
    await axios.get(endpoint, { withCredentials: true });
  } catch (error) {
    // TODO: send to Sentry
  }
  const cookies = new Cookies();
  cookies.remove("token");
  window.location.href = "/";
};
