import React, { useState, useEffect } from 'react';
//import axios from "axios";
import {Link} from "react-router-dom"

export default function Dashboard() {
    const [posts, SetPosts] = useState([]);

    useEffect(() => {
        axios
            .get(`https://backend-chef.herokuapp.com/api/recipes/`)
            .then(res => {
                SetPosts(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log('this data was not returned', err);
            })
        }, []);

        return (
            <section className="recipe-list">
                 {/* <RecipeCard 
                    chef_name={recipes.chef_name}
                    recipe_photo={recipes.recipe_photo}
                    recipe_name={recipes.recipe_name} 
                    ingredients={recipes.ingredients}
                    cook_time={recipes.cook_time}
                    prep_time={recipes.prep_time}
                    instructions={recipes.instructions}
                    servings={recipes.servings}
                    /> */}

                    {posts.map((post) => {
                        return (
                             <p key={post._id}>
                                {post.chef_name}
                                {post.recipe_photo}
                                {post.recipe_name} 
                                {post.ingredients}
                                {post.cook_time}
                                {post.prep_time}
                                {post.instructions}
                                {post.servings}
                            </p>
                        )
                    })}
                <div className="post-add-edit">
                    <button>Edit recipe</button>
                    <Link className="add" to="/add">Add New Recipe</Link>
                </div>
            </section>
        )

}
