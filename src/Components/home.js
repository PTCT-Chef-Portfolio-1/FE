import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
//import Video from './video';
//import '../App.css';


// export default function Middle() {
//     const Button = styled.button`
//     z-index: 2;
//     position: relative;
//     `

//     const Header = styled.h1`
//     position: relative;
//     font-size: 5rem;
//     color: orange;
//     z-index: 2;
//     `
//     useEffect(() => {
//         if (!localStorage.getItem('reload')) {
//           window.location.reload()
//           localStorage.setItem("reload", "loaded")
//         }
//       }, []);
    


//     const [full, setFull] = useState(false)
//     console.log(full)

//     const fun1 = e => {
//         setFull(true);
//         alert("WHY WOULD YOU DO THAT!?!?!?")
//         document.body.requestFullscreen()
//         setTimeout(function(){alert("I TOLD YOU SHOULDN'T!!!!!") && setFull(false) }, 5000)
//         setTimeout(function(){ setFull(false) }, 5000)
//     }
//     return (
//         <>
//             <div className={full? "hehe" : "haha"}></div>
//             <Video />
//             <Header>JUST LET IT HAPPEN!</Header>
//             <Button onClick={() => { fun1()}}>DONT CLICK ME!!!</Button>
//         </>
//     )
// }

const HomeWrapper = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

export default function Home() {
    const [recipes, SetRecipes] = useState([]);

    useEffect(() => {
        axios
            .get(`https://backend-chef.herokuapp.com/api/recipes/`)
            .then(res => {
                SetRecipes(res.data.results);
                console.log(res.data);
            })
            .catch(err => {
                console.log('this data was not returned', err);
            })
        }, []);

        console.log(recipes);

        return (
            <HomeWrapper>
                {recipes.map(recipe => {
                    return <Card recipe={recipe} key={recipe.created}/>
                })}
            </HomeWrapper>
        )

}
