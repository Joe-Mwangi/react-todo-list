import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header">
        <h2>React Grocery App</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
    </div>
  )
}
export default Header