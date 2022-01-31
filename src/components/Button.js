import styled from 'styled-components'

const StyledButton = styled.button`
  backgroundColor: "violet",
`

const Button = ({children}) => {
    return (
        <StyledButton>{children}</StyledButton>
    )
}
export default Button;