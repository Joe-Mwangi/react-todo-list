import { createContext, useState } from "react";

export const AppContext = createContext()

function AppProvider({children}) {
  const [listItem, setListItem] = useState([])
  const [text, setText] = useState('')
  const [msg, setMsg] = useState('')
  const [show, setShow] = useState(false)

  function submitForm(e) {
    e.preventDefault()
    if(text === '') {
      setMsg('Value cannot be empty')
      setTimeout(() => setMsg(''), 2000)
    } else {
      const item = {
        text,
        id: crypto.randomUUID()
      }
      setShow(true)
      setListItem([item, ...listItem])
      setMsg('')
      setText('')
    }
  }
  function handleTextChange(e) {
    setText(e.target.value)
  }

  function clearItems() {
    setListItem([])
    setShow(false)
  }

  function deleteItem(id) {
    const newItems = listItem.filter(item => item.id !== id)
    setListItem(newItems)
    if(listItem.length === 1) {
      setShow(false)
    }
  }

  return (
    <AppContext.Provider value={{
        text,
        msg,
        show,
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
