
   
import { list } from "./usersdata";
import UserCard from "./UserCard";
import { Container, Row } from "reactstrap";

const UsersList = () => {
  return (
    <>
      <Container>
        <Row>
          {list.map((el, i) => (
            <UserCard user={el} />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default UsersList;