import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-neutral-800 items-center justify-center flex font-bold hover:shadow-md">
        <p className="text-white">MI</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-white hover:underline" : "text-purple-300 hover:underline"}>
          About
        </NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? "text-white hover:underline" : "text-purple-300 hover:underline"}>
          Contacts
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar