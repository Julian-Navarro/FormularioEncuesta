import React from "react";
import { Div, Button, H1 } from "../../../styled-components/styled-components";

export default function OccupationForm({ input, handlerSetInput }) {
    const green = "#00FA9A"

    return (
        <Div flexDir="column" wd="80%">
            <H1 fSize="28px">
                Cuéntanos ¿Cuál es tu ocupación?
            </H1>
            <Div flWr="wrap" jfCont="space-around" wd="30rem" hg="8rem">
                <Button bg={input.occupation.includes("Studing") ? green : "#fff"} name="occupation" value="Studing" onClick={(e)=>handlerSetInput(e)} >Estudio</Button>
                <Button bg={input.occupation.includes("Working") ? green : "#fff"} name="occupation" value="Working" onClick={(e)=>handlerSetInput(e)} >Trabajo</Button>
                <Button bg={input.occupation.includes("Retired") ? green : "#fff"} name="occupation" value="Retired" onClick={(e)=>handlerSetInput(e)} >Soy pensionado / jubilado</Button>
                <Button bg={input.occupation.includes("Looking for a job") ? green : "#fff"} name="occupation" value="Looking for a job" onClick={(e)=>handlerSetInput(e)} >Estoy en búsqueda laboral</Button>
                <Button bg={input.occupation.includes("Homeowner") ? green : "#fff"} name="occupation" value="Homeowner" onClick={(e)=>handlerSetInput(e)} >Dueño/a de casa</Button>
                <Button bg={input.occupation.includes("Other") ? green : "#fff"}  name="occupation" value="Other" onClick={(e)=>handlerSetInput(e)} >Otra ocupación</Button>
            </Div>
        </Div>
    )
}

