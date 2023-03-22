import React from "react";
import { Div, Button, H1 } from "../../../styled-components/styled-components";

export default function LivesWith({ input, handlerSetInput }) {
        
        const green = "#00FA9A"
    return (
        <Div flexDir="column">
            <H1 fSize="26px">Ahora cuentanos, ¿Con quién vives?</H1>
            <Div flWr="wrap" jfCont="space-between" wd="80%" hg="24vh" >
                <Button value="With my parents" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("With my parents") ? green : "#fff"}>Con mis padres</Button>
                <Button value="With my partner" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("With my partner") ? green : "#fff"}>Con mi pareja</Button>
                <Button value="With my childrens" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("With my childrens") ? green : "#fff"}>Con mis hijos</Button>
                <Button value="With my brothers" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("With my brothers") ? green : "#fff"}>Con mis hermanos</Button>
                <Button value="With my pet" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("With my pet") ? green : "#fff"}>Con mi mascota</Button>
                <Button value="With my friend" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("With my friend") ? green : "#fff"}>Con amigos</Button>
                <Button value="Alone" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("Alone") ? green : "#fff"}>Solo</Button>
                <Button value="Other" name="livesWith" onClick={(e)=>handlerSetInput(e)} bg={input.livesWith.includes("Other") ? green : "#fff"}>Otro</Button>
            </Div>
        </Div>
    )
}