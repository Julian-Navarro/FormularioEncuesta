import React, { useEffect } from "react";
import axios from "axios";
import { HOST } from "../../utils.js";

export default function Survey () {
    let array;
    let cb = async () => {
        array = await axios.get(`${HOST}/api/surveys`)
        // return array.data
    }
    useEffect(()=>{
        cb()
        console.log("USE-EFFECT: ");
    },[])
    return (
        <div>
            {array !== undefined ? array.data.map((sur)=> <h1>{sur.gender}</h1>) : null}
            Asa
        </div>
    )
}