import AddUserForm from "./components/AddUserForm";
import {useState} from "react";
import Card from "./components/Card";
import UsersList from "./components/UsersList";
import Modal from "./components/Modal";
import styled from 'styled-components'

const dummy_users = [{
    id: "1",
    name: 'John',
    age: '13'
}]

const App = () => {
    const [users, setUsers] = useState(dummy_users)
    const [open, setOpen] = useState(false)

    const addUserHandler = (newUser) => {
        setUsers(prevState => {
            return [...prevState, newUser]
        })
    }
    const modalHandler = (value) => {
        setOpen(value)
    }

    return (
        <div>
            {open && <Modal closeModal={modalHandler}/>}
            <Card>
                <AddUserForm addNewUser={addUserHandler} openModal={(value) => setOpen(value)}/>
            </Card>
            <Card>
                <UsersList users={users}/>
            </Card>
        </div>
    );
}

export default App;
