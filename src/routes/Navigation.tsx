import { Suspense } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom"
import logo from '../logo.svg'
import { routes } from "./routes"

export const Navigation = () => {
  return (

    <Suspense fallback={<span>Loading...</span>}>

    <Router>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="React logo"/>
          <ul>

            {
              routes.map( ({path, name}) => (
                <li key={path}>
                  <NavLink 
                    className={({isActive}) => isActive? 'nav-active' : ''} 
                    to={path} 
                    end
                  >
                    {name}
                  </NavLink>
                </li>
              ))
            }
            
          </ul>
        </nav>

        <Routes>
          {
            routes.map(({ path, component:Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))
          }

        {/* <Route path="/" element={<LazyPage1 />} /> */}

        </Routes>
      </div>
    </Router>

    </Suspense>
  )
}