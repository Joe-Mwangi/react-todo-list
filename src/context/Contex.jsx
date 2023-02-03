import { createContext, useState } from "react";

export const AppContext = createContext()

function AppProvider({children}) {
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
    <AppContext.Provider value={{
        text,
        listItem,
        submitForm,
        handleTextChange,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
