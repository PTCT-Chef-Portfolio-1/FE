import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import { useParams } from 'react-router';
import RecipeCard from './recipeCard';


export default function Dashboard(props) {
    const token = localStorage.getItem('token');
    const { id } = useParams();
    const [ chef, setChef ] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(`https://chefs-view.herokuapp.com/users/${id}`)
            .then(res => {
                setChef(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log('this data was not returned', err);
            })
        }, [id, setChef]);

    useEffect(() => {
        axios
            .get(`https://chefs-view.herokuapp.com/recipes/${id}`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log('recipes not returning', err);
            });
    }, [id,setPosts]);

    return (
        <div>
            {chef.map(chef => (
                <div key={chef.id}>
                    <div>
                        <h2>{chef.first_name}</h2>
                        <p>Hello Chef</p>

                    </div>
                    </div>
            ))}

            <div>
                {posts.map(post => (
                    <RecipeCard
                    key={post.id}
                    id={post.id}
                    chefName={post.first_name}
                    title={post.recipe_name}
                    cook_time={post.cook_time}
                    />
                ))}
            </div>
        </div>
 )


        // return (
        //     <section className="recipe-list">
        //          <RecipeCard 
        //             chef_name={recipes.chef_name}
        //             recipe_photo={recipes.recipe_photo}
        //             recipe_name={recipes.recipe_name} 
        //             ingredients={recipes.ingredients}
        //             cook_time={recipes.cook_time}
        //             prep_time={recipes.prep_time}
        //             instructions={recipes.instructions}
        //             servings={recipes.servings}
        //             />
        //         <div className="post-add-edit">
        //             <button>Edit recipe</button>
        //             <Link className="add" to="/add">Add New Recipe</Link>
        //         </div>
        //     </section>
        // )

}

