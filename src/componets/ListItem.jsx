import { useContext } from "react"
import { AppContext } from "../context/Contex"

function ListItem({list}) {
  const {deleteItem, editItem} = useContext(AppContext)

  return (
    <div className="grocery-item">
        <p className="title">{list.text}</p>
        <div className="btn-container">
        <button className="edit-btn" onClick={() => editItem(list.id)}>edit</button>
        <button className="delete-btn" onClick={() => deleteItem(list.id)}>delete</button>
        </div>
    </div>
  )
}
export default ListItem