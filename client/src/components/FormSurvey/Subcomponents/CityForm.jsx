import React, { useState } from "react";
import { Div, H1, Select } from "../../../styled-components/styled-components";

export default function CityForm({ input,  handlerSetInput }) {
    const cities = ["Chile", "Argentina", "Perú", "Venezuela"];
    const countries = { 
        Venezuela: [
            "Amazonas",
            "Apure",
            "Aragua",
            "Barcelona",
            "Barinas",
            "Barquisimeto",
            "Carabobo",
            "Caracas",
            "Cojedes" ,
            "Coro",
            "Cumaná",
            "Guárico",
            "Guayana",
            "Maracaibo",
            "Margarita",
            "Maturín",
            "Mérida",
            "Portuguesa",
            "Táchira",
            "Trujillo",
            "Yaracuy"
            ],
        Argentina: [
            "Buenos Aires",
            "La pampa",
            "Mendoza",
            "Neuquén",
            "Río negro",
            "Entre Ríos",
            "Santa fe",
            "Córdoba",
            "San Luis",
            "San Juan",
            "Corrientes",
            "La rioja",
            "Formosa",
            "Misiones",
            "Chubut",
            "Chaco",
            "Santiago del estero",
            "Catamarca",
            "Jujuy",
            "Salta",
            "Formosa",
            "Santa cruz",
            "Tierra del fuego",
            "Tucumán"
        ],
        Chile: [
            "Arica y Parinacota",
            "Tarapacá",
            "Antofagasta",
            "Atacama",
            "Coquimbo",
            "Valparaíso",
            "Coquimbo",
            "Libertador General Bernardo O'Higgins",
            "Región Metropolitana",
            "Maule",
            "Ñuble",
            "Bío-Bío",
            "Araucanía",
            "Ríos",
            "Lagos",
            "Aysén",
            "Magallanes y la Antártica Chilena"
        ],
        Peru: [
            "Tacna",
            "Arequipa",
            "Puno",
            "Moquegua",
            "Cusco",
            "Puerto Maldonado",
            "Abancay",
            "Ayacucho",
            "Ica",
            "Huancaelica",
            "Huancayo",
            "Ucayali",
            "Pucallpa",
            "Callao",
            "Lima",
            "Pasco",
            "Huaraz",
            "Huánuco",
            "San Martin",
            "Iquitos",
            "Chachapoyas",
            "Cajamarca",
            "Trujillo",
            "Chiclayo",
            "Piura",
            "Tumbes"
        ]
    };
    const [commune, setCommune] = useState([]);


    const green = "#00FA9A"
    return (
        <Div flexDir="column" wd="70%" hg="30vh">
            <H1>¿Donde vives?</H1>
            <Div wd="100%" jfCont="space-between">

              <Select br="0px" wd="11rem" onClick={(e)=>handlerSetInput(e)} defaultValue={input.city} name="city" id="">
                  <option value="default">Seleccionar ciudad</option>
                  {
                      cities.map((c)=> <option value={c} key={c}>{c}</option> )
                  }
              </Select>
              <Select br="0px" wd="11rem" onClick={(e)=>handlerSetInput(e)} defaultValue={input.commune} name="commune" id="">
                  <option value="default">Seleccionar comuna</option>
                  {
                      cities[input.city].map((c)=> <option value={c} key={c}>{c}</option> )
                  }
              </Select>
            </Div>
        </Div>
    )
}