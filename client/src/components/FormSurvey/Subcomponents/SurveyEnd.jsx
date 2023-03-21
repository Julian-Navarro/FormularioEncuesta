import React from "react";

export default function SurveyEnd () {
    const [date] = Date().split(" GMT")
    
    return (
        <div>
            <h2>Excelente! te hemos enviado un mail confirmando nuestro contacto el día: </h2>
            <h2>{date.slice(3)}</h2>
            <h2>Muchas gracias por permitirnos conocerte mejor, estamos seguros que podremos seguirte brindando los mejores beneficios</h2>
        </div>
    )
}