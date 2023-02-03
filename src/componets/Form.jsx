import { useState } from "react"
import ListItem from "./ListItem"
import Container from "./shared/Container";
import ListContainer from "./shared/ListContainer";
import ClearBtn from './ClearBtn'

function Form() {
  const [listItem, setListItem] = useState([])
  const [text, setText] = useState('')

  const submitForm = e => {
    e.preventDefault()
    setListItem([text, ...listItem])
    console.log(listItem)
  }
  const handleTextChange = e => {
    setText(e.target.value)
  }

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
        <ListItem list={listItem}/>
      </ListContainer>
      <ClearBtn/>
    </Container>
    </>
  )
}
export default Form