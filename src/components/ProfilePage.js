import Dashboard from "./Dashboard.js";
import Loading from "./Loading.js";
import useRequireAuth from "../hooks/useRequireAuth.js";

const ProfilePage = (props) => {
  const auth = useRequireAuth();
  // If auth is null (still fetching data)
  // or false (logged out, above hook will redirect)
  // then show loading indicator.
  if (!auth) {
    return <Loading />;
  }
  return <Dashboard auth={auth} />;
}

export default ProfilePage