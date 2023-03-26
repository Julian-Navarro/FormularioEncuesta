import React from "react";
import { Div, Button, H1 } from "../../../styled-components/styled-components";

export default function GenderForm ({ input ,handlerSetInput }) {
    const green = "#00FA9A"
    return (
        <div>
            <H1 fSize="32px">Te damos la bienvenida!</H1>
            <H1 fSize="20px" >Queremos conocerte mejor para brindarte los mejores beneficios</H1>
            <H1 fSize="20px" >Podrías indicarnos ¿Con qué género te identificas?</H1>
            <Div wd="100%" jfCont="space-around">
              <Button _hoverBg={green} pd="5px 35px 5px 35px" value="female" name="gender" onClick={(e)=>handlerSetInput(e)} bg={input.gender === "female" ? green : "#fff"}>Mujer</Button>
              <Button _hoverBg={green} pd="5px 35px 5px 35px" value="male" name="gender" onClick={(e)=>handlerSetInput(e)} bg={input.gender === "male" ? green : "#fff"}>Hombre</Button>
              <Button _hoverBg={green} pd="5px 35px 5px 35px" value="Other" name="gender" onClick={(e)=>handlerSetInput(e)} bg={input.gender === "Other" ? green : "#fff"}>Otro</Button>
            </Div>
        </div>
    )
}