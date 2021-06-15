import { useSelector } from "react-redux";
import "./styles.css";
const Details = () => {
  const value = useSelector((state) => state);
  console.log(value.user);
  return (
    <div>
      {value.user.map((user) => (
        <div>
          <table>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mail Id</th>
              <th>Phone</th>
            </tr>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};
export default Details;
