import { createContext, useState } from "react";

export const AppContext = createContext()

function AppProvider({children}) {
  const [listItem, setListItem] = useState([])
  const [text, setText] = useState('')
  const [msg, setMsg] = useState('')
  const [success, setSuccess] = useState('empty')
  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState('')
  const [btn, setBtn] = useState('add')

  function submitForm(e) {
    e.preventDefault()
    if(text === '') {
      alertMsgFunc('danger', 'Value cannot be empty')
    } else {
      if(!edit) {
        const item = {
          text,
          id: crypto.randomUUID()
        }
        setShow(true)
        setListItem([item, ...listItem])
        alertMsgFunc('success', 'Item created successfully')
        setText('')
      }
      Object.assign(editId, { text })
      setEdit(false)
      setText('')
      setBtn('add')
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

  function editItem(id) {
    const editText = listItem.find(item => item.id === id)
    setEdit(true)
    setText(editText.text)
    setEditId(editText)
    setBtn('edit')
    alertMsgFunc('edit', 'You are in edit mode')
  }

  return (
    <AppContext.Provider value={{
        text,
        msg,
        show,
        btn,
        success,
        listItem,
        submitForm,
        handleTextChange,
        clearItems,
        deleteItem,
        editItem
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
