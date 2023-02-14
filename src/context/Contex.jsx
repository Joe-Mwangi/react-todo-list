import { createContext, useState, useEffect } from "react";

export const AppContext = createContext()

function AppProvider({children}) {
  const [listItem, setListItem] = useState([])
  const [text, setText] = useState('')
  const [msg, setMsg] = useState('')
  const [success, setSuccess] = useState('empty')
  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState(false)
  const [itemEdit, setItemEdit] = useState('')
  const [lsItemId, setLsItemId] = useState('')
  const [btn, setBtn] = useState('add')

  useEffect(() => {
    function getFromLocalstorage() {
      setListItem(localStorageItems())
      if(localStorageItems().length > 0) {
        setShow(true)
      }
    }
    getFromLocalstorage()
  }, [])

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
        saveToLocalstorage([item, ...listItem])
        alertMsgFunc('success', 'Item created successfully')
        setText('')
      }
      Object.assign(itemEdit, { text })
      setEdit(false)
      setText('')
      setBtn('add')
      editFromLocalstorage(lsItemId, text)
    }
  }
  function handleTextChange(e) {
    setText(e.target.value)
  }

  function clearItems() {
    setListItem([])
    setShow(false)
    alertMsgFunc('danger', 'Items have been deleted')
    localStorage.removeItem('item')
  }

  function deleteItem(id) {
    const newItems = listItem.filter(item => item.id !== id)
    setListItem(newItems)
    delFromLocalstorage(id)
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

  function editItem(updateItem) {
    setEdit(true)
    setText(updateItem.text)
    setItemEdit(updateItem)
    setBtn('edit')
    alertMsgFunc('edit', 'You are in edit mode')
    setLsItemId(updateItem.id)
  }

  function saveToLocalstorage(item) {
    localStorage.setItem('item', JSON.stringify(item))
  }

  function delFromLocalstorage(id) {
    const newItems = localStorageItems().filter(item => item.id !== id)
    localStorage.setItem('item', JSON.stringify(newItems))
  }

  function editFromLocalstorage(id, text) {
    // const newItem = localStorageItems().find(item => item.id === id)
    // Object.assign(newItem, {text})
    // const newItems = localStorageItems().filter(item => item.id !== id)
    // localStorage.setItem('item', JSON.stringify([newItem,...newItems]))

    const items = localStorageItems().map(item => {
      if(item.id === id) {
        item.text = text
      }
      return item
    })
    localStorage.setItem('item', JSON.stringify(items))
  } 

  function localStorageItems() {
    return localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : []
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
        editItem,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
