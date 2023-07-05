import React from "react";
import styles from "./UserList.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserList = (props) => {



  let userCard = <p>No cards added yet.</p>;

    
    const deleteUserHandler = (userId) => {
        console.log(userId);
        props.onDeleteUser(userId);
    }


    
  if (props.users.length !== 0) {
    userCard = props.users.map((user) => (
      <li key={user.id}>
        {user.name}({user.age} years old)
            <Button className="user_button" type="button" onClick={()=>deleteUserHandler(user.id)}>Delete</Button>
        </li>
       
    ));
  }

  return (
    <Card className={styles.users}>
      <ul>{userCard}</ul>
    </Card>
  );
};

export default UserList;
