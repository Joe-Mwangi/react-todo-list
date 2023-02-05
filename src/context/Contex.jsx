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
      setShow(true)
      setListItem([text, ...listItem])
      setMsg('')
      setText('')
    }
  }
  function handleTextChange(e) {
    setText(e.target.value)
  }

  function clearItems() {
    console.log('clicked')
    setListItem([])
    setShow(false)
  }

  return (
    <AppContext.Provider value={{
        text,
        msg,
        show,
        listItem,
        submitForm,
        handleTextChange,
        clearItems
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
