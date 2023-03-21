import React from "react";

export default function GenderForm ({ handlerSetInput }) {
    return (
        <div>
            <h2>Queremos conocerte mejor para brindarte los mejores beneficios</h2>
            <h3>Podrías indicarnos ¿Con qué género te identificas?</h3>
            <div>
              <button value="female" name="gender" onClick={(e)=>handlerSetInput(e)}>Mujer</button>
              <button value="male" name="gender" onClick={(e)=>handlerSetInput(e)}>Hombre</button>
              <button value="Unknow" name="gender" onClick={(e)=>handlerSetInput(e)}>Prefiero no decirlo</button>
            </div>
        </div>
    )
}