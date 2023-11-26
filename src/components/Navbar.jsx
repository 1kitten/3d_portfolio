import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-sm shadow-white">
        <p className="text-white">KB</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-white hover:underline" : "text-fuchsia-400 hover:underline"}>
          About
        </NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? "text-white hover:underline" : "text-fuchsia-400 hover:underline"}>
          Contacts
        </NavLink>
      </nav>

    </header>
  )
}

export default Navbar