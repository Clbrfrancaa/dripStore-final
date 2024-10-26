import './Section.css'
import Card from './Card'
import products from '../mock/products'

// let products = [
//     {
//         name: "sapato nike",
//         price: 300,
//         image: "sapato3.png"
//     },
//     {
//         name: "sapato nike2",
//         price: 400,
//         image: "sapato3.png"
//     },
//     {
//         name: "sapato nike3",
//         price: 500,
//         image: "sapato3.png"
//     },
// ];


function Section() {
    let cardsElemens = [];
    // for(let i=0; i<products.length; i++){
    //     let product=products[i]

    //     cardsElemens.push(<Card name={product.name} price={product.price} image={product.image} />)
    // }

    return (
        <>
            <div className="container-fluid corDeFundoBranco">

                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="container">
                                <div className="row d-flex flex-row">
                                    <div className="col offset-1 align-self-center text-justify">
                                        <h6 className="text-warning text-justify">Melhores ofertas personalizadas</h6>
                                        <h1>queima de estoque nike</h1>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quaerat.
                                        <button className="btn corBotaoRosa text-light mt-5">ver ofertas</button>
                                    </div>
                                    <div className="col">
                                        <img src="image.png" alt="" className="d-block w-100" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="container">
                                <div className="row d-flex flex-row">
                                    <div className="col offset-1 align-self-center text-justify">
                                        <h6 className="text-warning">Melhores ofertas personalizadas</h6>
                                        <h1>queima de estoque nike</h1>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quaerat.
                                        <button className="btn corBotaoRosa text-light mt-5">ver ofertas</button>
                                    </div>
                                    <div className="col">
                                        <img src="image.png" alt="" className="d-block w-100" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="container">
                                <div className="row d-flex flex-row ">
                                    <div className="col offset-1  align-self-center text-justify">
                                        <h6 className="text-warning">Melhores ofertas personalizadas</h6>
                                        <h1>queima de estoque nike</h1>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quaerat.
                                        <button className="btn corBotaoRosa text-light mt-5">ver ofertas</button>
                                    </div>
                                    <div className="col">
                                        <img src="image.png" alt="" className="d-block w-100" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <br /><br /><br /><br /><br />
            <div className="container ">
          
                <div className="container mt-5">
                    <div className="row gap-2 d-flex flex-row">
                        <div className="col  fundoCard pt-5 pb-3  rounded-2">
                            <div className="row d-flex flex-row">
                                <div className="col">
                                    <h6 className="  desconto fs-6">30%off</h6>
                                    <h3 className='teste'>novo drop supreme</h3>
                                    <button className="btn btn-light corFonteBotaoComp1">comprar</button>
                                </div>
                                <div className="col">
                                    <img src="camisa1.png" alt="" width={'150px'} />
                                </div>
                            </div>
                        </div>
                        <div className="col  fundoCard pt-5 pb-3  rounded-2">
                            <div className="row d-flex flex-row">
                                <div className="col">
                                    <h6 className="  desconto fs-6">30%off</h6>
                                    <h3>novo drop supreme</h3>
                                    <button className="btn btn-light corFonteBotaoComp1">comprar</button>
                                </div>
                                <div className="col">
                                    <img src="sapato2.png" alt="" width={'150px'} />
                                </div>
                            </div>
                        </div>
                        <div className="col  fundoCard pt-5  pb-3 rounded-2">
                            <div className="row d-flex flex-row">
                                <div className="col">
                                    <h6 className="  desconto fs-6">30%off</h6>
                                    <h3>novo drop supreme</h3>
                                    <button className="btn btn-light corFonteBotaoComp1">comprar</button>
                                </div>
                                <div className="col">
                                    <img src="fone.png" alt="" width={'150px'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <h3 className='text-center mb-5'>coleções em destaque</h3>
                <div className="row d-flex gap-5 flex-row justify-content-center">
                    <div className="col col-1">
                        <div className='icone'><img src="icone1.png" className='icone' alt="" width={'60px'} /></div>
                        <h6>camisetas</h6>
                    </div>
                    <div className="col col-1">
                        <div className='icone'><img src="icone2.png" className='icone' alt="" width={'60px'} /></div>
                        <h6>calças</h6>
                    </div>
                    <div className="col col-1">
                        <div className='icone'><img src="icone3.png" className='icone' alt="" width={'60px'} /></div>
                        <h6>bonés</h6>
                    </div>
                    <div className="col col-1">
                        <div className='icone'><img src="icone4.png" className='icone' alt="" width={'60px'} /></div>
                        <h6>headphones</h6>
                    </div>
                    <div className="col col-1">
                        <div className='icone'><img src="icone5.png" className='icone' alt="" width={'60    px'} /></div>
                        <h6>tênis</h6>
                    </div>

                </div>
            </div>

            <br /><br /><br /><br /><br />


            <div className="container gap-2">
                <h4 className="text-start">produtos em alta</h4>
                <div className="row ">
                    <div className="d-flex flex-wrap">

                    {/* {cardsElemens} */}
                    {products.map(function(product, i){
                        return <Card key={i} name={product.name} price={product.price} image={product.image} /> 
                    })}
                    </div>
                </div>
            </div>
         


            <br /><br /><br /><br /><br />
            <div className="container-fluid corDeFundoComp4">
                <div className="row  d-flex flex-row">
                    <div className="col col-6 gradiente">
                        <img src="sapato4.png" alt="" width={"500px"} />
                    </div>
                    <div className="col col-5 offset-1 align-self-center">
                        <p className='corFonteRosa'><b>oferta especial</b></p>
                        <h1>queima de estoque nike</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo
                            voluptatum similique, assumenda architecto velit.
                        </p>
                        <button className="btn corBotaoRosa text-light"> ver ofertas</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Section;