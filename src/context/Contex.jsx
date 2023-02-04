import { createContext, useState } from "react";

export const AppContext = createContext()

function AppProvider({children}) {
  const [listItem, setListItem] = useState([])
  const [text, setText] = useState('')
  const [msg, setMsg] = useState('')
  const [show, setShow] = useState(false)

  const submitForm = e => {
    e.preventDefault()
    if(text === '') {
      setMsg('Value cannot be empty')
      setTimeout(() => setMsg(''), 2000)
    } else {
      setShow(true)
      setListItem([text, ...listItem])
      setMsg('')
    }
  }
  const handleTextChange = e => {
    setText(e.target.value)
  }

  return (
    <AppContext.Provider value={{
        text,
        msg,
        show,
        listItem,
        submitForm,
        handleTextChange,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
