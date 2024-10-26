import Collections from "../componentes/Collections";
import Section from "../componentes/Section";


function HomePage(){
    return(
        <>
        <Section title="Collections" link={{"text":"saiba mais2", "href":"www.google.com"}}>
            <Collections/>
        </Section>

        <Section title="Produtos em alta" link={{"text":"saiba mais3", "href":"https://www.bing.com/search?pglt=2083&q=google&cvid=9884a44d044c414784cfa4f9aeca8958&gs_lcrp=EgRlZGdlKgcIABAuGPkHMgcIABAuGPkHMgYIARBFGDkyBggCEC4YQDIGCAMQABhAMgYIBBAuGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDwyBggIEAUYQNIBCDEyMjdqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531"}}>
            componentes que lista os produtos
        </Section>
        </>
    )
} export default HomePage;