import './App.css'
import Artists from './artists.jsx'
import Events from './events.jsx'
import {useEffect, useState} from 'react';

export default function App() {

    const [clickArtists, setClickArtists] = useState(false);
    const [clickEvents, setClickEvents] = useState(false);
    const [pages, setPages] = useState("Home");

    useEffect(() => {
        if (pages === "artists")
            setClickArtists(false);
    }, [clickArtists]);

    useEffect(() => {
        if (pages === "events")
            setClickEvents(false);
    }, [clickEvents]);

  return (
    <>
        <a onClick={()=> {setPages("artists"); setClickArtists(true)}}>Listing des artistes</a>
        <br/>
        <br/>
        <a onClick={()=> {setPages("events"); setClickEvents(true)}}>Listing des events</a>
        <br/>
        <br/>
        <br/>


        {pages === "artists" && <Artists click = {clickArtists}/>}
        {pages === "events" && <Events click = {clickEvents}/>}
    </>
  )
}