import { lazy, LazyExoticComponent } from "react"
import { NoLazy } from "../01-lazyload/pages/NoLazy"

type JSXComponent = () => JSX.Element

interface Route {
    path: string
    component: LazyExoticComponent<JSXComponent> | JSXComponent //() => JSX.Element
    name: string
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        component: lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout') ),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        component:  NoLazy,
        name: 'No Lazy Loading'
    }
]