import React from "react";

export default function ChildrensForm({ handlerSetInput }) {
    return (
        <div>
            <h2>¡Nos encanta saber que eres madre!</h2>
            <h2>Ahora cuéntanos ¿Cuantos hijos tienes?</h2>
            <div>
                <button value="1" name="childrens" onClick={(e)=>handlerSetInput(e)} >1</button>
                <button value="2" name="childrens" onClick={(e)=>handlerSetInput(e)} >2</button>
                <button value="3" name="childrens" onClick={(e)=>handlerSetInput(e)} >3</button>
                <button value="Más de 3" name="childrens" onClick={(e)=>handlerSetInput(e)} >Más de 3</button>
            </div>
        </div>
    )
}