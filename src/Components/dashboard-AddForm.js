import React from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

export default function DashAddForm({setRecipes, recipes}){
    const {register, handleSubmit, watch, errors} = useForm()
    const history = useHistory()

    const onSubmit = data => {
        const recipeToBeAdded = {...data, id:Math.random()}
        setRecipes([...recipes,recipeToBeAdded])
        history.push('/')
    }
    return (
        <div>
            <h2> Add New Recipe</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder="Title" 
                    name="title"
                    ref={register({reguired: true})}
                />
                {errors.title && <span>Title is required!</span>}
                <input 
                    placeholder="Meal Type" 
                    name="meal"
                    ref={register({reguired: true})}
                />
                {errors.meal && <span>Meal Type is required!</span>}
                <input 
                    placeholder="Created by" 
                    name="chef"
                    ref={register({reguired: true})}
                />
                {errors.chef && <span>Credit goes to</span>}
                <input 
                    placeholder="Ingredients" 
                    name="ingredients"
                    ref={register({reguired: true})}
                />
                {errors.ingredients && <span>Ingredients required</span>}
                <button type="submit">Submit</button>

            </form>
        </div>
    )



}
