
function Msg({msg, success}) {
  return (
    <p className={
      success === 'empty' ? "alert" :
      success === 'danger' ? "alert alert-danger":
      "alert  alert-success"
    }
      >{msg}</p>
  )
}
export default Msg