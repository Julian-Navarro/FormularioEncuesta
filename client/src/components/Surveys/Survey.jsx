import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../utils.js";
import { useNavigate } from "react-router-dom";
export default function Survey () {
    const navigate = useNavigate();
    const [surveys, setSurveys] = useState(undefined);
    const getSurveys = async () => {
        const surveysDB = await axios.get(`${HOST}/api/surveys`)
        setSurveys(surveysDB.data)
    }
    useEffect(() => {
        getSurveys()
        console.log("USE-EFFECT: ");
        console.log("Surveys: ", surveys);
    },[])

    return (
        <div>
            <h2>Surveys</h2>
            {surveys !== undefined ? surveys.map((sur)=> <h1 key={sur.id}>{sur.gender}</h1>) : null}
            <button onClick={()=>navigate("/survey")}>Hacer encuesta</button>
        </div>
    )
}