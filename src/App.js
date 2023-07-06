import React, { Fragment, useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
function App() {
const [userList, setUserList] = useState([])


  const collectedData = (userName, userAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList,
      { name: userName, age: userAge, id: Math.random().toString() }];
    });

  };

  const deleteUser = (userId) => {
    const updatedUserList = userList.filter((user) => user.id !== userId);
    setUserList(updatedUserList);
  }
  
 
  return (
    <Fragment>
      <AddUser onAddUser={collectedData } />
      <UserList onDeleteUser={deleteUser } users={userList} />
      
    </Fragment>
  );
}

export default App;
