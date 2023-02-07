import { createContext, useState } from "react";

export const AppContext = createContext()

function AppProvider({children}) {
  const [listItem, setListItem] = useState([])
  const [text, setText] = useState('')
  const [msg, setMsg] = useState('')
  const [success, setSuccess] = useState('empty')
  const [show, setShow] = useState(false)

  function submitForm(e) {
    e.preventDefault()
    if(text === '') {
      alertMsgFunc('danger', 'Value cannot be empty')
    } else {
      const item = {
        text,
        id: crypto.randomUUID()
      }
      setShow(true)
      setListItem([item, ...listItem])
      alertMsgFunc('success', 'Item created successfully')
      setText('')
    }
  }
  function handleTextChange(e) {
    setText(e.target.value)
  }

  function clearItems() {
    setListItem([])
    setShow(false)
    alertMsgFunc('danger', 'Items have been deleted')
  }

  function deleteItem(id) {
    const newItems = listItem.filter(item => item.id !== id)
    setListItem(newItems)
    alertMsgFunc('danger', 'Item has been deleted')
    if(listItem.length === 1) {
      setShow(false)
    }
  }

  function alertMsgFunc(success, msg) {
    setSuccess(success)
    setMsg(msg)
    setTimeout(() => {
      setMsg('')
      setSuccess('empty')
    }, 2000)
  }

  return (
    <AppContext.Provider value={{
        text,
        msg,
        show,
        success,
        listItem,
        submitForm,
        handleTextChange,
        clearItems,
        deleteItem
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
