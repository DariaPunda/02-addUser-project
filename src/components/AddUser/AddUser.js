import React, {useState} from "react";
import styles from './AddUser.module.css';
import ErrorModal from "../ErrorModal/ErrorModal";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
    // const initialValue = { Username: '', Age: '' };
    // const [collectedData, setCollectedData] = useState(initialValue); 

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    

    const [isOpen, setIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);

    };
    
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };

    const openModal = () => { 
        setIsOpen(true);

    };
    const closeModal = () => { 
        setIsOpen(false);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorMessage('Please enter a valid name and age (non-empty values).');
            openModal();
        } else if (+enteredAge <= 0 || +enteredAge >= 110) {
            setErrorMessage('Please enter a valid age.');
            openModal();
        } else {
            props.onAddUser(enteredUsername, enteredAge);
        }
        
        setEnteredUsername(''); 
        setEnteredAge('')

    };

//     const collectedDataHandler = (name, value) => {
//         setCollectedData((prevState) => {
//             return {
//                 ...prevState,
//                 [name]: value,
// }})    }

    return (

        <Card className={styles.input}>
                    <form  onSubmit={submitHandler}>
            <label>Username
                    <input type='text' value={enteredUsername} onChange={usernameChangeHandler}></input>
                </label> 
            <label>Age(Years)
            <input type='number' value={enteredAge} onChange={ageChangeHandler}></input>
            </label>
                <Button type="submit" className={styles['input_button']}>Add User</Button></form>
            
            {isOpen && (<ErrorModal onClose={closeModal}><p>{errorMessage}</p></ErrorModal>)}
      </Card>
            

)
};

export default AddUser;