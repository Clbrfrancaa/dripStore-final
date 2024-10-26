function Card(props) {
    console.log(props)
    return (
        <>
            <div className="row d-flex flex-column">
                <div className="col cardSapatoComp3">

                    <img src={props.image} alt="" width={'150px'} />
                </div>
                <div className="col">
                    <p className='corFontePreço'>tenis</p>
                    <p>{props.name}</p>
                    <h5>{props.price}</h5>
                </div>
            </div>
        </>
    )
}
export default Card