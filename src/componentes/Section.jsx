import './Section.css'
import Card from './Card'
import products from '../mock/products'

function Section(props) {
   console.log(props)
    return (
        <>
            <div>
                <h1>{props.title}</h1>
               <a href={props.link.href}>{props.link.text}</a>
                {props.children}
            </div>
        </>
    )
}
export default Section;