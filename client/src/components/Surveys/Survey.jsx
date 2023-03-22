import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../utils.js";
import { useNavigate } from "react-router-dom";
import { H1, Div, Button} from "../../styled-components/styled-components";

export default function Survey () {
    const navigate = useNavigate();
    const [surveys, setSurveys] = useState(undefined);
    const getSurveys = async () => {
        const surveysDB = await axios.get(`${HOST}/api/surveys`)
        setSurveys(surveysDB.data)
    }
    useEffect(() => {
        getSurveys()
    },[])

    return (
        <Div flexDir="column">
            <H1>Surveys</H1>
            <Button _hoverBc="orange" onClick={()=>navigate("/survey")}>Hacer encuesta</Button>

            <Div flWr="wrap" jfCont="space-around"  alItems="space-around" wd="100%" hg="100vh">
            {surveys !== undefined ? surveys.map((sur)=> (
                <Div bs="0 0 .7rem .3rem lightblue" mt="26px" bg="aliceblue" br="10px" flexDir="column" wd="360px" hg="480px" key={sur.id}>
                    <Div flWr="wrap" jfCont="space-around" alItems="space-around" hg="12rem">

                    <Div hg="3rem" br=".7rem" bc="gray">
                        <H1 fSize="16px" fWeight="700">Género: </H1>
                        <H1 pd="6px" br="16px" fSize="16px">{sur.gender}</H1>
                    </Div>

                    <Div hg="3rem" br=".7rem" bc="gray">
                        <H1 fWeight="700" fSize="16px">Ciudad: </H1>
                        <H1 pd="6px" br="16px" fSize="16px">{sur.city}</H1>
                    </Div>
                    {sur.childrens?
                    <Div hg="3rem" br=".7rem" bc="gray">
                        <H1 fSize="16px" fWeight="700">Hijos: </H1>
                        <H1 pd="6px" br="16px" fSize="16px">{sur.childrens}</H1> 
                    </Div>
                    :null}
                    <Div hg="3rem" br=".7rem" bc="gray">
                        <H1 fSize="16px" fWeight="700">Comuna: </H1>
                        <H1 pd="6px" br="16px" fSize="16px">{sur.commune}</H1>
                    </Div>

                    <Div hg="3rem" br=".7rem" bc="gray">
                        <H1 fSize="16px" fWeight="700">Puntuación: </H1>
                        <H1 pd="6px" br="16px" fSize="16px">{sur.punctuation}</H1>
                    </Div>
                    </Div>
                    <Div jfCont="space-between" wd="95%" br="5%">
                    <Div br="5%" bc="gray" hg="9rem" flexDir="column">
                    <H1 fSize="16px" fWeight="700"> Vive con: </H1>
                    {
                        sur.livesWith.map((lv) => <H1 br="14px" fSize="14px">{lv}</H1>  )
                    }
                    </Div>

                    <Div br="5%" bc="gray" hg="9rem" flexDir="column">
                    <H1 fSize="16px" fWeight="700">Ocupaciones: </H1>
                    {
                        sur.occupation.map((occ) => <H1 br="14px" fSize="14px">{occ}</H1> )
                    }
                    </Div>

                    </Div>
                </Div>
                )) : null}
            </Div>

        </Div>
    )
}