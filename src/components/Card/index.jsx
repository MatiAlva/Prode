import { useState, useEffect } from "react"
import Partidos from "../Partidos";
import '../../scss/Partidos.scss';

const Card = () => {

    const [result, setResult] = useState(null);

    useEffect(() => {
        fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", {
            headers: {
                "X-RapidAPI-Key": import.meta.env.KEY,
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
            }
        }).then(response => response.json())
            .then((data) => {
                setResult(data.response)
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <>
            <h1 className="partidos__title">PARTIDOS</h1>
            <button className="btn btn-sec--light">Seleccionar liga</button>
            {
                result ? (
                    result.map((match) => (
                        <Partidos match={match} key={match.fixture.id} />
                    ))
                )
                    : <div>Loading...</div>
            }
        </>
    )
}

export default Card