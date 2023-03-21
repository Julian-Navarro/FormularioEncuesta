import React from "react";

export default function CityForm({ handlerSetInput }) {
    const cities = ["Chile", "Argentina", "Perú", "Bolivia", "Paraguay", "Venezuela", "México", "Colombia", "Ecuador" ];
    const commune = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
            <h2>¿Donde vives?</h2>
            <select onClick={(e)=>handlerSetInput(e)} name="city" id="">
                <option value="default">Seleccionar ciudad</option>
                {
                    cities.map((c)=> <option value={c} key={c}>{c}</option> )
                }
            </select>
            <select onClick={(e)=>handlerSetInput(e)} name="commune" id="">
                <option value="default">Seleccionar comuna</option>
                {
                    commune.map((c)=> <option value={c} key={c}>{c}</option> )
                }
            </select>
        </div>
    )
}