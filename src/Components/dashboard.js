import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";
import RecipeCard from './recipeCard';
import styled from "styled-components"

export default function Dashboard() {
    const [posts, SetPosts] = useState([]);
    const [recipe, setRecipe] = useState({});
    const [editing, setEditing] = useState(false)

    const RecipeCards = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    align-items: center;
    `

    const Button = styled.button`
    width: 40%;
    height: 10%;
    background-color: lightblue;
    color: grey;
    font-size: 2rem;
    `
    const X = styled.h1`
    position: fixed;
    top: 5;
    left: 2%;
    `

    const handleChanges = e => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        Axios
            .get(`https://backend-chef.herokuapp.com/api/recipes/user/${localStorage.getItem("userId")}`)
            .then(res => {
                SetPosts(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log('this data was not returned', err);
            })
    }, []);

    const editer = e => {
        e.preventDefault();
        console.log("hi");
        setEditing(false);
        Axios
            .put(
                `https://backend-chef.herokuapp.com/api/recipes/update/${localStorage.getItem("recipeid")}`,
                recipe
            )
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    function remover(id) {
        console.log(id)
        Axios
          .delete(
            `https://backend-chef.herokuapp.com/api/recipes/delete/${id}`
          )
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }


    const editTime = (id) =>{
        setEditing(true)
            Axios
                .get(`https://backend-chef.herokuapp.com/api/recipes/recipeId/${id}`)
                .then(res => {
                    setRecipe(res.data);
                    console.log(res.data);
                    localStorage.setItem("recipeid", id)
                })
                .catch(err => {
                    console.log('this data was not returned', err);
                })
    }

    return (
        <div className ="Dashboard">
            <div className="post-add-edit">
                <Link className="add" to="/add">Add New Recipe</Link>
            </div>
                <div className={editing ? "editModal" : "closed"}>
                    <X onClick={()=> {setEditing(!editing)}}>X</X>
                    <h1>Edit Recipe</h1>
                    <form className="editForm" onSubmit={editer}>
                        <span>
                            <p>Recipe Name</p>
                            <input
                                className="name"
                                type="text"
                                name="recipe_name"
                                value={recipe.recipe_name}
                                onChange={handleChanges}
                            />
                        </span>
                        <span>
                            <p>Prep Time</p>
                            <input
                                type="text"
                                name="prep_time"
                                value={recipe.prep_time}
                                onChange={handleChanges}
                            />
                        </span>
                        <span>
                            <p>Cook Time</p>
                            <input
                                type="text"
                                name="cook_time"
                                value={recipe.cook_time}
                                onChange={handleChanges}
                            />
                        </span>
                        <span>
                            <p>Servings</p>
                            <input
                                type="text"
                                name="servings"
                                value={recipe.servings}
                                onChange={handleChanges}
                            />
                        </span>

                        <span>
                            <p>Image URL</p>
                            <input
                                className="name"
                                type="text"
                                name="recipe_photo"
                                value={recipe.recipe_photo}
                                onChange={handleChanges}
                            />
                        </span>
                        <div>
                            <p className="bottom-text">Add Ingredients</p>
                            <textarea
                                className="ingredients"
                                type="text"
                                name="ingredients"
                                placeholder="Ingredients:"
                                rows="2"
                                cols="30"
                                value={recipe.ingredients}
                                onChange={handleChanges}
                            ></textarea>
                        </div>
                        <div>
                            <p className="bottom-text">Add Instructions</p>
                            <textarea
                                className="directions"
                                type="text"
                                name="instructions"
                                placeholder="Directions:"
                                rows="2"
                                cols="30"
                                value={recipe.instructions}
                                onChange={handleChanges}
                            ></textarea>
                        </div>
                        <button className="editButton" type="submit">Edit Post</button>
                    
                    </form>








            </div>
            <h1> MY RECIPES</h1>
            <div className="searchCards">
                {posts.map(recipes => (
                    <>
                        <RecipeCards>
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
                            <Button onClick={() => {editTime(recipes.id)}}>Edit ^^^</Button>
                            <Button className="deleteButton" onClick={() =>{remover(recipes.id)}}>Delete ^^^</Button>
                        </RecipeCards>
                    </>
                ))}
            </div>
        </div>
    )

}
