import React from "react";

export default function LivesWith({ handlerSetInput }) {
    return (
        <div>
            <h2>Ahora cuentanos, ¿Con quién vives?</h2>
            <div>
                <button value="With my parents" name="livesWith" onClick={(e)=>handlerSetInput(e)}>Con mis padres</button>
                <button value="With my partner" name="livesWith" onClick={(e)=>handlerSetInput(e)}>Con mi pareja</button>
                <button value="With my childrens" name="livesWith" onClick={(e)=>handlerSetInput(e)}>Con mis hijos</button>
                <button value="With my brothers" name="livesWith" onClick={(e)=>handlerSetInput(e)}>Con mis hermanos</button>
                <button value="With my pet" name="livesWith" onClick={(e)=>handlerSetInput(e)}>Con mi mascota</button>
                <button value="With my friend" name="livesWith" onClick={(e)=>handlerSetInput(e)}>Con amigos</button>
                <button value="Alone" name="livesWith" onClick={(e)=>handlerSetInput(e)}>Solo</button>
                <button value="Other" name="livesWith" onClick={(e)=>handlerSetInput(e)}>Otro</button>
            </div>
        </div>
    )
}