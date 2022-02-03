import {useRef, useState} from "react";
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

const AddUserForm = ({addNewUser, openModal}) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName= nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            openModal(true)
            return;
        }
        const userData = {
            id: Math.random().toString(),
            name: enteredName,
            age: enteredAge,
        }
        addNewUser(userData)
        nameInputRef.current.value =''
        ageInputRef.current.value =''
    }

    return (
        <>
            <StyledForm onSubmit={submitHandler}>
                <StyledLabel htmlFor="username">User name</StyledLabel>
                <StyledInput type="text" id="username" ref={nameInputRef}/>
                <StyledLabel htmlFor="age">Age</StyledLabel>
                <StyledInput type="number" id="age"  ref={ageInputRef}/>
                <Button type="submit">Add user</Button>
            </StyledForm>
        </>
    )
}
export default AddUserForm;