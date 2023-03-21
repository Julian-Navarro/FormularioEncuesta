import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GenderForm from "./Subcomponents/GenderForm";
import LivesWith from "./Subcomponents/LivesWithForm";
import ChildrensForm from "./Subcomponents/ChildrensForm";
import CityForm from "./Subcomponents/CityForm";
import OccupationForm from "./Subcomponents/OccupationForm";
import PunctuationForm from "./Subcomponents/PunctuationForm";
import SurveyEnd from "./Subcomponents/SurveyEnd";
import axios from "axios";
import { HOST } from "../../utils";

export default function FormSurvey () {
    const navigate = useNavigate()
    const [page, setPage] = useState(0);
    const [input, setInput] = useState({
        gender: "",
        livesWith: [],
        city: "",
        commune: "",
        punctuation: 0,
        childrens: "",
        occupation: [] 
    })
    let [errors, setErrors] = useState({
        gender: "",
        livesWith: "",
        city: "",
        commune: "",
        punctuation: "",
        childrens: "",
        occupation: "" 
    })
    function handlerSetInput(e) {
        if(typeof input[keys[page]] === "object") {
            if(!input[keys[page]].includes(e.target.value)) {
                input[keys[page]].push(e.target.value)

            } else {
                const index = input[keys[page]].indexOf(e.target.value);
                const first = input[keys[page]].slice(0, index);
                const second = input[keys[page]].slice(index+1);
                const final = [...first, ...second]
                setInput({...input, [keys[page]]: final})
            }
        } else {
            if(e.target.value!== "default") {
                setInput({...input, [e.target.name]: e.target.value})
            } else {
                setInput({...input, [e.target.name]: ""})
            }
        }
    }

    const keys = ["gender", "livesWith", "childrens", "city", "occupation", "punctuation"];
    const keysEspañol = ["género", "con quién vives", "cuantos hijos tienes", "dónde vives y comuna", "cual es tu ocupación", "una puntuación de recomendación"]
    function validate(page) {
        // console.log("TYPEOF INPUT CURRENT KEY: ",typeof input[keys[page]]);
        if(typeof input[keys[page]] === "object") {
            if(input[keys[page]].length === 0) {
                errors = {...errors, [keys[page]]: `Debes indicar ${keysEspañol[page]}`}
            } else {
                errors = {...errors, [keys[page]]: ""}
            }
        } else if(page===3){
            if(input.city === "" || input.commune === ""){
                errors = {...errors, [keys[page]]: `Debes indicar ${keysEspañol[page]}`}
            } else {
                errors = {...errors, [keys[page]]: ""}
            }
        } else {
            if(input[keys[page]] === "" || input[keys[page]] === 0){
                errors = {...errors, [keys[page]]: `Debes indicar ${keysEspañol[page]}`}
            } else {
                errors = {...errors, [keys[page]]: ""}
            }
        }
    }

    function handlerIncrementPage() {
        validate(page)
        if(errors.gender === "" 
          && errors.livesWith.length === 0
          && errors.childrens === ""
          && errors.city === ""
          && errors.commune === ""
          && errors.occupation.length === 0
          && errors.punctuation === ""
        ) {
            console.log("NO HAY ERRORES", errors);
            if(page!==1){
                setPage(page+1)
            } else if(!input.livesWith.includes("With my childrens")) {
                setPage(page+2)
            } else {
                setPage(page+1)
            }
        } else {
            console.log("INPUT: ",input);
            console.log("HAY ERRORES", errors)
            alert("Faltó seleccionar una opción")
        }
        if(input.gender !== ""
        && input.livesWith.length !== 0
        && input.city !== ""
        && input.commune !== ""
        && input.occupation.length !== 0
        && input.punctuation !== 0
        ) {
            console.log("POSTEANDO");
            handlerPostSurvey()
        } else {
            console.log("NO SE PUEDE POSTEAR");
        }
    }
    function handlerDecrementPage(){
        if(page===3 && errors.childrens === ""){
            setPage(page-2)
        } else {
            setPage(page-1)
        }
    }
    async function handlerPostSurvey(){
        // setInput({...input, punctuation: Number(input.punctuation)})
        console.log("INPUT: ",{...input, punctuation: Number(input.punctuation)});
        await axios.post(`${HOST}/api/surveys`, {...input, punctuation: Number(input.punctuation)})
        setPage(page+1)    
    }
useEffect(()=>{
    console.log("Rendering page: ",page);
    console.log("INPUT: ",input);
    console.log("ERRORS: ",errors);

},[page])
    return (
        <div>
            <h2>FORM PAGE {page}</h2>
            <button onClick={()=>navigate("/")}>Ver encuestas</button>

            {page===0?<h2>Te damos la bienvenida!</h2>:null}

            <div>
                {page===0? <GenderForm handlerSetInput={handlerSetInput}/>:null}
                {page===1? <LivesWith handlerSetInput={handlerSetInput}/>:null}
                {page===2? <ChildrensForm handlerSetInput={handlerSetInput}/>:null}
                {page===3? <CityForm handlerSetInput={handlerSetInput}/>:null}
                {page===4? <OccupationForm handlerSetInput={handlerSetInput}/>:null}
                {page===5? <PunctuationForm handlerSetInput={handlerSetInput}/>:null}
                {page===6? <SurveyEnd/>:null}
            </div>

            <div>
                {page>= 1 && page <= 5?<button onClick={()=>handlerDecrementPage()}>Volver</button>:null}
                {page <=4?<button onClick={()=>handlerIncrementPage()}>Siguiente</button>:null}
                {page ===5?<button onClick={()=>handlerIncrementPage()}>Siguiente</button>:null}

                {page===6?<button onClick={()=>{alert("FINALIZADO")}}>Finalizar</button>:null}
            </div>
        </div>
    )
}