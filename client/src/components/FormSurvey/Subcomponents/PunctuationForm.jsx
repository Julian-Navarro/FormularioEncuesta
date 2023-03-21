import React from "react";

export default function PunctuationForm({ handlerSetInput }) {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div>
            <h2>Pensando en tu experiencia con nosotros ¿Recomiendas Help Seguros a un familiar o amigo?</h2>
            <h5>Siendo 0 no los recomiendo en absoluto y 10 los recomiendo totalmente</h5>
            <div>
                {
                    numbers.map((num)=> <button name="punctuation" value={num} key={num} onClick={(e)=>handlerSetInput(e)}>{num}</button> )
                }
            </div>
        </div>
    )
}