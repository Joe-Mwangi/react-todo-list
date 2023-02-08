
function Msg({msg, success}) {
  return (
    <p className={
      success === 'empty' ? "alert" :
      success === 'danger' ? "alert alert-danger":
      success === 'edit' ? "alert alert-edit" :
      "alert  alert-success"
    }
      >{msg}</p>
  )
}
export default Msg