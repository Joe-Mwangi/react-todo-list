import { useContext } from "react"
import { AppContext } from "../context/Contex"
import { FaEdit, FaTrash } from "react-icons/fa"

function ListItem({list}) {
  const {deleteItem, editItem} = useContext(AppContext)

  return (
    <div className="grocery-item">
        <p className="title">{list.text}</p>
        <div className="btn-container">
        {/* <button className="edit-btn" onClick={() => editItem(list)}></button> */}
        {/* <button className="delete-btn" onClick={() => deleteItem(list.id)}>delete</button> */}
        <FaEdit color="hsl(125, 67%, 44%)" size={18} onClick={() => editItem(list)}/>
        <FaTrash color="hsl(360, 67%, 44%)" size={18} onClick={() => deleteItem(list.id)}/>
        </div>
    </div>
  )
}
export default ListItem