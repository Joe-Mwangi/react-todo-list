import { useContext } from "react";
import ListItem from "./ListItem"
import Container from "./shared/Container";
import ListContainer from "./shared/ListContainer";
import ClearBtn from './ClearBtn'
import {AppContext} from "../context/Contex";


function Form() {
  const {
    submitForm,
    handleTextChange,
    listItem,
    text
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
      <ListContainer>
        {listItem.map((item, index) => 
        <ListItem key={index} list={item}/>
        )}
      </ListContainer>
      <ClearBtn/>
    </Container>
    </>
  )
}
export default Form