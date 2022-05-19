import { useParams } from "react-router-dom";
import { list } from "./usersdata";
const Profile = () => {
  const { iduser } = useParams();
  return (
    <>
      <h1> {list.find((el) => el.id === Number(iduser)).name}</h1>
      <p>{list.find((el) => el.id === Number(iduser)).address.street}</p>
      <p>{list.find((el) => el.id === Number(iduser)).address.city}</p>
      <p>{list.find((el) => el.id === Number(iduser)).email}</p>
    </>
  );
};
export default Profile;