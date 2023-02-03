function ListItem({list}) {
  return (
    <div className="grocery-item">
        <p className="title">{list}</p>
        <div className="btn-container">
        <button className="edit-btn">edit</button>
        <button className="delete-btn">delete</button>
        </div>
    </div>
  )
}
export default ListItem