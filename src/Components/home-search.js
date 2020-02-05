import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./recipeCard";


export default function HomeSearch() {
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);
    
    useEffect(() => {
      axios
        .get(`https://backend-chef.herokuapp.com/api/recipes`)
        .then(res => {
          console.log(res.data)
          const filtered = res.data.filter(filter => {
              console.log(search === filter.recipe_name, filter.chef_name, filter.ingredient)
              return filter.recipe_name.toLowerCase().includes(search.toLowerCase()) 
              || filter.chef_name.toLowerCase().includes(search.toLowerCase()) 
                || filter.ingredient.toLowerCase().includes(search.toLowerCase())
          });
          setFiltered(filtered);
      })  
        .catch(err => {
          console.log("The data was not returned", err);
        })
      }, [search]);

      console.log(filtered);

      const handleChange = e => {
        e.preventDefault();
        setSearch(e.target.value)
            
      };
     
      return (
        <section className="search-bar">
         <label>
         <input
            type="text"
            placeholder="Search Recipes, Meal types, Chefs, and Ingredients!"
            onChange={handleChange}
            value={search}
         />
        <button type="submit">Search</button>
        </label>
        <div>
             {filtered.map(recipes => (
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
    </div>
   </section>
  );
}
