import {useState} from "react";
import Button from "./Button";
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`
const StyledLabel = styled.label`
  font-weight: 600;
  margin: 5px 0;
`
const StyledInput = styled.input`
  border: 1px solid #ddd;
  outline: none;

  &:active, &:focus {
    border: 1px solid darkviolet;
  }

`

const AddUserForm = ({addNewUser}) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const nameHandler = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }
    const ageHandler = (event) => {
        console.log(event.target.value)
        setAge(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if(name.trim().length === 0 || age.trim().length === 0){
            return;
        }
        const userData ={
            id: Math.random().toString(),
            name: name,
            age: age,
        }
        addNewUser(userData)
        setName('')
        setAge('')
    }

    return (
        <StyledForm onSubmit={submitHandler}>
            <StyledLabel htmlFor="username">User name</StyledLabel>
            <StyledInput type="text" id="username" value={name} onChange={nameHandler}/>
            <StyledLabel htmlFor="age">Age</StyledLabel>
            <StyledInput type="number" id="age" value={age} onChange={ageHandler}/>
            <Button type="submit">Add user</Button>
        </StyledForm>
    )
}
export default AddUserForm;