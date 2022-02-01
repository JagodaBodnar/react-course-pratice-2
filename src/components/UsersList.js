import styled from 'styled-components'

const StyledList = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  width: 80%;
  border: 1px solid #a625a6;
  padding: 10px;
  margin-bottom: 5px;
`

const UsersList = ({users}) => {
    return (
        users.map(item => {
            return (
                <StyledList key={item.id}>
                    {item.name} ({item.age} years old)
                </StyledList>
            )
        })
    )
}
export default UsersList;