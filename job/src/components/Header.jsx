import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <header>
        <h2>Job status</h2>
        <div>
            <NavLink to={"/"}> Position List</NavLink>
            <NavLink to={"/add-job"}>  Add a Position </NavLink>
        </div>
      
    </header>
  )
}

export default Header
