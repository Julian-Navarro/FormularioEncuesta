import React from "react";

export default function OccupationForm({ handlerSetInput }) {
    return (
        <div>
            <h2>
                Cuéntanos ¿Cuál es tu ocupación?
            </h2>
            <div>
                <button name="occupation" value="Studing" onClick={(e)=>handlerSetInput(e)} >Estudio</button>
                <button name="occupation" value="Working" onClick={(e)=>handlerSetInput(e)} >Trabajo</button>
                <button name="occupation" value="Retired" onClick={(e)=>handlerSetInput(e)} >Soy pensionado / jubilado</button>
                <button name="occupation" value="Looking for a job" onClick={(e)=>handlerSetInput(e)} >Estoy en búsqueda laboral</button>
                <button name="occupation" value="Homeowner" onClick={(e)=>handlerSetInput(e)} >Dueño/a de casa</button>
                <button  name="occupation" value="Other" onClick={(e)=>handlerSetInput(e)} >Otra ocupación</button>
            </div>
        </div>
    )
}

