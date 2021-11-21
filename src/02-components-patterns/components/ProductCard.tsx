import styles from '../styles/styles.module.css'
import { useProducts } from '../hooks/useProducts'
import { createContext, CSSProperties, ReactElement } from 'react'
import { Product, ProductContextProps} from '../interfaces/interfaces'


export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
    className?: string
    style?: CSSProperties
}


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style }: Props) => {

 const { counter, increaseBy } = useProducts()
    
    return (

        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}
            >

                {children}

            </div>
        </Provider>
    )
}
