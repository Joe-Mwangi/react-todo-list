import { useContext } from "react"
import { AppContext } from "../context/Contex"

function ClearBtn({show}) {
  const {clearItems} = useContext(AppContext)
  return (
    <button 
    className={show ? "clear-btn show": "clear-btn"}
    onClick={clearItems}
    >clear items</button>
  )
}

ClearBtn.defaultProps = {
  show: false
}
export default ClearBtn