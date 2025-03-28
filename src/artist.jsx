import {useEffect, useState} from "react";

export default function Artist(props) {

    const [artist, setArtist] = useState([]);

    useEffect(()=>{
        fetch(("http://localhost:8000/api/artist/" + props.id.toString()))
            .then((res)=>res.json())
            .then((jsonData)=> {
                setArtist(jsonData);
            })
    },[]);


    return(
        <>
            <h4>{artist.name}</h4>
            <p>{artist.description}</p>
            <img src={"http://localhost:8000/images/products/" + artist.image}/>
        </>
    )
}