import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../ReduxStuff/Actions';


const CreateRecipe = props => {
    let userId= localStorage.getItem('userId')
    const [recipe, setRecipe] = useState({
        userId: userId
    });

    const handleChanges = e => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addRecipe(recipe);
        props.history.push(`/chefdashboard/${userId}`);
    }

    return (

        <form className="PostForm" onSubmit={handleSubmit}>
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
            <button className="addButton" type="submit">Post Recipe</button>
        </form>

    )
}


const mapStateToProps = state => {
    return state;
  };
  
  export default connect(mapStateToProps, { addRecipe })(CreateRecipe);