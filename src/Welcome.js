import { useDispatch } from "react-redux";
import { action } from "./action";
import Details from "./details";
import users from "./users.json";

const Welcome = (props) => {
  const dispatch = useDispatch();

  dispatch(action(users));

  const logoutHandler = () => {
    props.history.push("/");
  };

  return (
    <div>
      <h1>Logged in</h1>
      <Details />
      <input type="button" value="log Out" onClick={logoutHandler} />
    </div>
  );
};
export default Welcome;
