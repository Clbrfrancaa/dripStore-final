import "./Section.css";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";
function Card(props) {
    useEffect(() => {
  
        const sr = ScrollReveal({ reset: true });
        sr.reveal(".cardSapatoComp3", {
       
          duration: 1500,
        });
      }, []);
   
    return (
        <>
            <div className="row  col-3  d-flex flex-column ">
                <div className=" cardSapatoComp3 col-10">

                    <img src={props.image} alt="" width={'150px'} className="offset-2 rotation"/>
                </div>
                <div className="col-10">
                    <p className='corFontePreço'>tenis</p>
                    <p style={{fontSize:"12px"}}>{props.name}</p>
                    <h5>{props.price}</h5>
                </div>
            </div>
        </>
    )
}
export default Card