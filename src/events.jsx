import Event from './event.jsx'
import {useEffect, useState} from "react";
import Artist from "./artist.jsx";

export default function Events(props) {
    const [events, setEvents] = useState([]);
    const [pages, setPages] = useState("");
    const [id, setId] = useState(null);


    useEffect(() => {
        if (props.click)
        {
            setPages("");
        }
        // console.log(props.click);
    }, [props.click]);

    useEffect(()=>{
        fetch(("http://localhost:8000/api/event"))
            .then((res)=>res.json())
            .then((jsonData)=> {
                setEvents(jsonData);
            })
    },[]);



    const eventsList = events ? events.map(event =>
        <a onClick={()=> {
            setPages("event");
            setId(event.id);
        }}>
            <li key={event.id}>{event.name}</li></a>) : [];


    return(
        <>
            {pages === "" && <ul>{ eventsList } </ul>}
            {pages === "event" && <Event id={id}/>}
        </>
    )
}