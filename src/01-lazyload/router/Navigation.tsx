import { Navigate, Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages"

export const Navigation = () => {

    return (
        <>
            <h2> Lazylayout Pages </h2>
            <ul>
                <li>
                    <NavLink to='Lazy1'>Lazy Page 1</NavLink>
                </li>

                <li>
                    <NavLink to='Lazy2'>Lazy Page 2</NavLink>
                </li>

                <li>
                    <NavLink to='Lazy3'>Lazy Page 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path='lazy1' element={<LazyPage1/>}/>
                <Route path='lazy2' element={<LazyPage2/>}/>
                <Route path='lazy3' element={<LazyPage3/>}/>
                <Route path='*' element={<Navigate replace to={'lazy1'}/>}/>
            </Routes>
            
        </>
    )
}
