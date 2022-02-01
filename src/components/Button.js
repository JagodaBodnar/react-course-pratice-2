import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #530c73;
  border: none;
  outline: none;
  padding: 5px 15px;
  font-size: 15px;
  color: #fff;
  max-width: 100px;
  margin: 5px 0;
`

const Button = ({children}) => {
    return (
        <StyledButton>{children}</StyledButton>
    )
}
export default Button;