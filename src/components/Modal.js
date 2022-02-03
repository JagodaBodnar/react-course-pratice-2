import styled from 'styled-components'
import ReactDOM, {createPortal} from 'react-dom'

const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  margin: 0;
  padding: 0;
`
const StyledCard = styled.div`
  position: fixed;
  top: 30%;
  left: 30%;
  z-index: 100;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
`
const Backdrop = ({closeModal}) => {
    return (
        <StyledBackdrop onClick={() => closeModal(false)}/>
    )
}
const ModalOverlay = ({closeModal}) => {
    return (
        <>
            <StyledCard onClick={() => closeModal(false)}>
                <h1>Error message</h1>
                <p>Check inputs neither of them can be empty.</p>
            </StyledCard>
        </>
    )
}
const Modal = ({closeModal}) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop closeModal={closeModal}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay closeModal={closeModal}/>, document.getElementById('overlay-root'))}
        </>
    )
}
export default Modal;