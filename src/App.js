import AddUserForm from "./components/AddUserForm";
import {useState} from "react";
import Card from "./components/Card";
import UsersList from "./components/UsersList";

const dummy_users = [{
    id: "1",
    name: 'John',
    age: '13'
}]
const App = () => {
    const [users, setUsers] = useState(dummy_users)
    const addUserHandler = (newUser) => {
        console.log(newUser)
        setUsers(prevState => {
            return [...prevState, newUser]
        })
    }
    return (
        <div className="App">
            <Card>
                <AddUserForm addNewUser={addUserHandler}/>
            </Card>
            <Card>
                <UsersList users={users}/>
            </Card>
        </div>
    );
}

export default App;
