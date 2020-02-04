import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

import recipeCard from './recipeCard'

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
            .get(`https://chef-2.herokuapp.com/api/recipes/`)
            .then(res => {
                SetRecipes(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log('this data was not returned', err);
            })
        }, []);

        return (
            <HomeWrapper>
                {recipes.map(recipes => (
                    <RecipeCard 
                    chef_name={recipes.chef_name}
                    recipe_photo={recipes.recipe_photo}
                    recipe_name={recipes.recipe_name} 
                    ingredients={recipes.ingredients}
                    cook_time={recipes.cook_time}
                    prep_time={recipes.prep_time}
                    instructions={recipes.instructions}
                    servings={recipes.servings}
                    />
                ))}

            </HomeWrapper>
        );
}
