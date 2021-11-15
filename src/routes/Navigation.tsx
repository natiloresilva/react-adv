import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom"
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="React logo"/>
          <ul>
            <li>
              <NavLink className={({isActive}) => isActive? 'nav-active' : ''} to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive? 'nav-active' : ''} to="/about" end>About</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive? 'nav-active' : ''} to="/users" end>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>

          <Route path="/about" element={<h1>About</h1>}>
          </Route>

          <Route path="/users" element={<h1>Users</h1>}>
          </Route>

          <Route path="/" element={<h1>Home</h1>}>
          </Route>

        </Routes>
      </div>
    </Router>
  )
}