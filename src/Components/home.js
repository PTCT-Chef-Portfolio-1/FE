import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Video from './video';
import '../App.css';


export default function Middle() {
    const Button = styled.button`
    z-index: 2;
    position: relative;
    `

    const Header = styled.h1`
    position: relative;
    font-size: 5rem;
    color: orange;
    z-index: 2;
    `
    useEffect(() => {
        if (!localStorage.getItem('reload')) {
          window.location.reload()
          localStorage.setItem("reload", "loaded")
        }
      }, []);
    


    const [full, setFull] = useState(false)
    console.log(full)

    const fun1 = e => {
        setFull(true);
        alert("WHY WOULD YOU DO THAT!?!?!?")
        document.body.requestFullscreen()
        setTimeout(function(){alert("I TOLD YOU SHOULDN'T!!!!!") && setFull(false) }, 5000)
        setTimeout(function(){ setFull(false) }, 5000)
    }
    return (
        <>
            <div className={full? "hehe" : "haha"}></div>
            <Video />
            <Header>JUST LET IT HAPPEN!</Header>
            <Button onClick={() => { fun1()}}>DONT CLICK ME!!!</Button>
        </>
    )
}