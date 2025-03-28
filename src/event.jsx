import {useEffect, useState} from "react";

export default function Event(props) {

    const [event, setEvent] = useState([]);

    useEffect(()=>{
        fetch(("http://localhost:8000/api/event/" + props.id.toString()))
            .then((res)=>res.json())
            .then((jsonData)=> {
                setEvent(jsonData);
            })
    },[]);


    return(
        <>
            <h4>{event.name}</h4>
            <p>{event.date}</p>
            <p>Artist : {event.artist.name}</p>
        </>
    )
}