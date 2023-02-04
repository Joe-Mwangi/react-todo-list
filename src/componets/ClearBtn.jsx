function ClearBtn({show}) {
  return (
    <button className={show ? "clear-btn show": "clear-btn"}>clear items</button>
  )
}

ClearBtn.defaultProps = {
  show: false
}
export default ClearBtn