import styled from 'styled-components'
const StyledCard = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 20px auto;
  border-radius: 5px;
  padding: 20px;
`


const Card =({children})=>{
    return(
        <StyledCard>{children}</StyledCard>
    )
}
export default Card;