import Artist from './artist.jsx'
import {useEffect, useState} from "react";

export default function Artists(props) {
    const [artists, setArtists] = useState([]);
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
        fetch(("http://localhost:8000/api/artist"))
            .then((res)=>res.json())
            .then((jsonData)=> {
                setArtists(jsonData);
            })
    },[]);

    const artistsList = artists ? artists.map(artist =>
        <a onClick={()=> {
            setPages("artist");
            setId(artist.id);
        }}>
            <li key={artist.id}>{artist.name}</li></a>) : [];

    return(
        <>
            {pages === "" && <ul>{ artistsList } </ul>}
            {pages === "artist" && <Artist id={id}/>}
        </>
    )
}