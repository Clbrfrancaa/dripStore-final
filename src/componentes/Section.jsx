import './Section.css'
import Card from './Card'
import products from '../mock/products'

function Section(props) {
   
    return (
        <>
            <div>
                <h1>{props.title}</h1>
            
                {props.children}
            </div>
        </>
    )
}
export default Section;