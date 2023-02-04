import { useContext } from "react";
import ListItem from "./ListItem"
import Container from "./shared/Container";
import ListContainer from "./shared/ListContainer";
import ClearBtn from './ClearBtn'
import {AppContext} from "../context/Contex";
import Msg from "./Msg";


function Form() {
  const {
    submitForm,
    handleTextChange,
    listItem,
    text,
    msg,
    show
  } = useContext(AppContext)
  return (
    <>
    <form className="grocery-form" onSubmit={submitForm}>
        <p className="alert"></p>
        <div className="form-control">
          <input type="text" id="grocery" value={text} onChange={handleTextChange} placeholder="e.g. eggs" />
          <button type="submit" className="submit-btn">add</button>
        </div>
    </form>
    <Container>
      <Msg msg={msg}/>
      <ListContainer>
        {listItem.map((item, index) => 
        <ListItem key={index} list={item}/>
        )}
      </ListContainer>
      <ClearBtn show={show}/>
    </Container>
    </>
  )
}
export default Form

//TODO:
//1- validate input
//2- fix clear items btn
//3- fix delete, and edit btns
//4- store listitems in localstorage